/**
 * Auto-records the Realm web demo into the screen recordings the Remotion
 * project expects: assets/screen/rec-01.mp4 … rec-12.mp4 (1920×1080, H.264, 30fps).
 *
 * Usage:
 *   node scripts/record-demo.mjs                # record all twelve
 *   node scripts/record-demo.mjs 2 5 7          # record only those numbers
 *   node scripts/record-demo.mjs --selftest     # validate the pipeline on a stub page
 *
 * Prerequisite: realm-web-demo.html (+ realm-app.js) in the project root.
 * Chromium is the pre-installed Playwright build; ffmpeg (libx264) converts the
 * recorded .webm to .mp4. External assets (fonts, Unsplash) route via the agent
 * proxy with TLS errors ignored so the pages paint fully.
 */
import { chromium } from "playwright";
import http from "node:http";
import { createReadStream, existsSync, mkdirSync, renameSync, rmSync, statSync, writeFileSync } from "node:fs";
import { dirname, extname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const HTML_PATH = process.env.DEMO_HTML ? resolve(process.env.DEMO_HTML) : join(ROOT, "realm-web-demo.html");
const OUT_DIR = join(ROOT, "assets", "screen");
const TMP_DIR = join(ROOT, ".rec-tmp");
const CHROME = process.env.REMOTION_BROWSER_EXECUTABLE ?? "/opt/pw-browsers/chromium-1194/chrome-linux/chrome";
const PROXY = process.env.HTTPS_PROXY || process.env.https_proxy || null;
const SIZE = { width: 1920, height: 1080 };
const SELFTEST = process.argv.includes("--selftest");

const MIME = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".png": "image/png", ".jpg": "image/jpeg", ".svg": "image/svg+xml", ".webp": "image/webp", ".woff2": "font/woff2", ".json": "application/json" };

// ---- tiny static server -----------------------------------------------------
const startServer = (rootDir, indexFile) =>
  new Promise((res) => {
    const server = http.createServer((req, reqRes) => {
      let rel = decodeURIComponent((req.url ?? "/").split("?")[0]);
      if (rel === "/" || rel === "") rel = "/" + indexFile;
      const file = join(rootDir, rel);
      if (!file.startsWith(rootDir) || !existsSync(file) || statSync(file).isDirectory()) {
        reqRes.writeHead(404);
        reqRes.end("not found");
        return;
      }
      reqRes.writeHead(200, { "Content-Type": MIME[extname(file)] ?? "application/octet-stream" });
      createReadStream(file).pipe(reqRes);
    });
    server.listen(0, "127.0.0.1", () => res(server));
  });

// ---- human-like pacing ------------------------------------------------------
const pause = (page, ms) => page.waitForTimeout(ms);
const moveMouse = async (page, x, y, steps = 22) => { await page.mouse.move(x, y, { steps }); await pause(page, 450); };
const smoothScroll = async (page, totalY, steps = 12, per = 95) => {
  for (let i = 0; i < steps; i++) { await page.mouse.wheel(0, totalY / steps); await pause(page, per); }
  await pause(page, 500);
};
/** Navigate the hash-routed SPA and let fonts/images settle. */
const go = async (page, hash) => {
  await page.evaluate((h) => { location.hash = h; }, hash);
  await page.waitForLoadState("networkidle").catch(() => {});
  await pause(page, 1300);
};
/** Resilient click by visible text; warns and continues if not found. */
const clickText = async (page, rx, { timeout = 2500 } = {}) => {
  for (const make of [
    () => page.getByRole("button", { name: rx }),
    () => page.getByRole("link", { name: rx }),
    () => page.getByText(rx, { exact: false }),
  ]) {
    const loc = make().first();
    try {
      await loc.waitFor({ state: "visible", timeout });
      const b = await loc.boundingBox();
      if (b) await moveMouse(page, b.x + b.width / 2, b.y + b.height / 2, 14);
      await loc.click({ timeout });
      await pause(page, 750);
      return true;
    } catch { /* next strategy */ }
  }
  console.warn(`      · could not find "${rx}"`);
  return false;
};
const clickSel = async (page, sel, nth = 0) => {
  try {
    const loc = page.locator(sel).nth(nth);
    await loc.waitFor({ state: "visible", timeout: 2500 });
    const b = await loc.boundingBox();
    if (b) await moveMouse(page, b.x + b.width / 2, b.y + b.height / 2, 14);
    await loc.click({ timeout: 2500 });
    await pause(page, 700);
    return true;
  } catch { console.warn(`      · could not click ${sel}#${nth}`); return false; }
};
const dragRange = async (page, nth) => {
  const el = page.locator('input[type="range"]').nth(nth);
  const b = await el.boundingBox();
  if (!b) return;
  await page.mouse.move(b.x + 8, b.y + b.height / 2, { steps: 6 });
  await page.mouse.down();
  await page.mouse.move(b.x + b.width * 0.75, b.y + b.height / 2, { steps: 24 });
  await page.mouse.up();
  await pause(page, 700);
};

// ---- the twelve recordings --------------------------------------------------
const RECORDINGS = [
  { n: 1, name: "Homepage", run: async (p) => {
      await smoothScroll(p, 2400, 12);
      for (const sel of [".pcard", ".pcard", ".pcard"]) { /* hover persona cards */ }
      for (let i = 0; i < 3; i++) await clickSel(p, ".pcard", i).catch(() => {});
    } },
  { n: 2, name: "Agent Today", run: async (p) => {
      await go(p, "#/app/dashboard");
      await clickText(p, /^WhatsApp$/); await pause(p, 2000);
    } },
  { n: 3, name: "Send a form", run: async (p) => {
      await go(p, "#/app/dashboard");
      await clickText(p, /send a form/i); await pause(p, 1000);
      await clickText(p, /send via whatsapp/i); await pause(p, 2000);
    } },
  { n: 4, name: "Deals board", run: async (p) => {
      await go(p, "#/app/deals");
      await p.locator(".kb").evaluate((el) => el.scrollTo({ left: 700, behavior: "smooth" })).catch(() => {});
      await pause(p, 1400);
      await clickText(p, /move to/i);
      await clickText(p, /preview client view/i); await pause(p, 3000);
    } },
  { n: 5, name: "Seller report", run: async (p) => {
      await go(p, "#/app/properties");
      await clickSel(p, ".prop-card", 0); await pause(p, 900);
      await clickText(p, /^Showing$/); await clickText(p, /^Call$/);
      await clickText(p, /make my seller report/i); await pause(p, 4000);
    } },
  { n: 6, name: "Money", run: async (p) => {
      await go(p, "#/app/money");
      await dragRange(p, 0); await dragRange(p, 1); await dragRange(p, 2);
      await pause(p, 2000);
    } },
  { n: 7, name: "Website builder", run: async (p) => {
      await go(p, "#/app/website");
      await clickSel(p, ".tpl", 1); await clickSel(p, ".tpl", 2);
      await clickText(p, /preview my site/i); await pause(p, 1500);
      await clickText(p, /^Estate$/); await pause(p, 1200);
      await clickText(p, /close preview/i); await pause(p, 800);
      await clickText(p, /view page/i); await pause(p, 3000);
      await clickText(p, /close preview/i);
    } },
  { n: 8, name: "Developer overview", run: async (p) => {
      await go(p, "#/dev/overview"); await pause(p, 1500);
      await go(p, "#/dev/units");
      await clickSel(p, ".unit", 0); await clickSel(p, ".unit", 12); await clickSel(p, ".unit", 25);
      await go(p, "#/dev/buyers"); await smoothScroll(p, 900, 7);
    } },
  { n: 9, name: "Developer updates + lender report", run: async (p) => {
      await go(p, "#/dev/updates");
      await clickText(p, /publish update/i);
      await go(p, "#/dev/reports"); await pause(p, 3000);
    } },
  { n: 10, name: "PM portal", run: async (p) => {
      await go(p, "#/pm/overview"); await pause(p, 1400);
      await go(p, "#/pm/budget"); await smoothScroll(p, 1100, 9);
      await go(p, "#/pm/amenities");
      await clickSel(p, ".slot-cell", 5); await clickSel(p, ".slot-cell", 20);
    } },
  { n: 11, name: "Resident portal", run: async (p) => {
      await go(p, "#/pm/overview");
      await clickText(p, /preview resident portal/i); await pause(p, 1000);
      await clickText(p, /pay now/i);
      await clickText(p, /^Sat 7a$/); await pause(p, 3000);
    } },
  { n: 12, name: "Pricing", run: async (p) => {
      await go(p, "#/pricing"); await smoothScroll(p, 3200, 16, 110);
    } },
];

// ---- driver -----------------------------------------------------------------
// Headless Playwright video recording renders blank on this Chrome build, so we
// capture via CDP screencast (the same reliable paint path as screenshots) and
// assemble the frames — timed by their real timestamps — into an H.264 mp4.
const ensureDirs = () => { mkdirSync(OUT_DIR, { recursive: true }); rmSync(TMP_DIR, { recursive: true, force: true }); mkdirSync(TMP_DIR, { recursive: true }); };
const durationOf = (f) => { try { return Number(execFileSync("ffprobe", ["-v", "error", "-show_entries", "format=duration", "-of", "default=noprint_wrappers=1:nokey=1", f]).toString().trim()); } catch { return 0; } };
const looksBlank = async (page) => { try { return ((await page.evaluate(() => document.body?.innerText ?? "")).trim().length) < 12; } catch { return true; } };

const recordOne = async (browser, base, rec) => {
  const framesDir = join(TMP_DIR, `rec-${rec.n}`);
  rmSync(framesDir, { recursive: true, force: true });
  mkdirSync(framesDir, { recursive: true });
  const context = await browser.newContext({ viewport: SIZE, deviceScaleFactor: 1, ignoreHTTPSErrors: true });
  const page = await context.newPage();
  await page.goto(base, { waitUntil: "networkidle" });
  await pause(page, 1400);
  const blank = await looksBlank(page);

  // Start CDP screencast.
  const client = await context.newCDPSession(page);
  const frames = [];
  let idx = 0;
  client.on("Page.screencastFrame", async (f) => {
    const file = join(framesDir, `f${String(idx++).padStart(6, "0")}.jpg`);
    try { writeFileSync(file, Buffer.from(f.data, "base64")); frames.push({ file, ts: f.metadata.timestamp }); } catch {}
    try { await client.send("Page.screencastFrameAck", { sessionId: f.sessionId }); } catch {}
  });
  await client.send("Page.startScreencast", { format: "jpeg", quality: 80, maxWidth: 1920, maxHeight: 1080, everyNthFrame: 1 });

  try { await rec.run(page); } catch (err) { console.warn(`      ! ${rec.name} flow error: ${err.message}`); }
  await pause(page, 500);
  try { await client.send("Page.stopScreencast"); } catch {}
  await context.close();

  const mp4 = join(OUT_DIR, `rec-${String(rec.n).padStart(2, "0")}.mp4`);
  if (frames.length > 1) {
    // Concat frames with real inter-frame durations, then normalise to 30fps.
    const t0 = frames[0].ts;
    let list = "";
    for (let i = 0; i < frames.length; i++) {
      const dur = i < frames.length - 1 ? Math.max(0.001, frames[i + 1].ts - frames[i].ts) : 0.25;
      list += `file '${frames[i].file}'\nduration ${dur.toFixed(4)}\n`;
    }
    list += `file '${frames[frames.length - 1].file}'\n`;
    const listFile = join(framesDir, "list.txt");
    writeFileSync(listFile, list);
    execFileSync("ffmpeg", ["-y", "-f", "concat", "-safe", "0", "-i", listFile, "-vf", "fps=30,scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080", "-c:v", "libx264", "-preset", "medium", "-crf", "20", "-pix_fmt", "yuv420p", "-movflags", "+faststart", mp4], { stdio: "ignore" });
    void t0;
  }
  rmSync(framesDir, { recursive: true, force: true });
  return { mp4, blank, nframes: frames.length };
};

const run = async () => {
  const nums = process.argv.slice(2).filter((a) => /^\d+$/.test(a)).map(Number);
  const list = nums.length ? RECORDINGS.filter((r) => nums.includes(r.n)) : RECORDINGS;

  if (!SELFTEST && !existsSync(HTML_PATH)) {
    console.error(`\n✗ Demo HTML not found: ${HTML_PATH}\n  Put realm-web-demo.html in the project root and re-run.\n`);
    process.exit(2);
  }

  ensureDirs();
  let serveDir = dirname(HTML_PATH), indexFile = "realm-web-demo.html";
  if (SELFTEST) {
    serveDir = TMP_DIR; indexFile = "selftest.html";
    writeFileSync(join(TMP_DIR, indexFile), `<!doctype html><meta charset=utf8><body style="margin:0;background:#14523c;color:#fff;font:600 90px/1.2 sans-serif;display:grid;place-items:center;height:100vh">Realm · pipeline OK</body>`);
  }

  const server = await startServer(serveDir, indexFile);
  const base = `http://127.0.0.1:${server.address().port}/`;
  const launchOpts = { executablePath: CHROME, headless: true, args: ["--no-sandbox", "--force-color-profile=srgb"] };
  if (PROXY) launchOpts.proxy = { server: PROXY, bypass: "127.0.0.1,localhost" };
  const browser = await chromium.launch(launchOpts);

  const rows = [];
  const toRun = SELFTEST ? [{ n: 0, name: "selftest", run: async (p) => { await pause(p, 2500); } }] : list;
  for (const rec of toRun) {
    console.log(`  ▸ rec-${String(rec.n).padStart(2, "0")} · ${rec.name}`);
    const { mp4, blank } = await recordOne(browser, base, rec);
    rows.push({ file: mp4.replace(ROOT + "/", ""), dur: durationOf(mp4), size: existsSync(mp4) ? statSync(mp4).size : 0, blank });
    if (blank) console.warn(`      ⚠ page looked blank — re-run with a longer wait if fonts/images failed`);
  }

  await browser.close();
  await new Promise((r) => server.close(r));
  rmSync(TMP_DIR, { recursive: true, force: true });

  console.log("\n  file                                duration    size");
  console.log("  " + "-".repeat(52));
  for (const r of rows) console.log(`  ${r.file.padEnd(34)}${(r.dur.toFixed(1) + "s").padStart(8)}${((r.size / 1e6).toFixed(1) + " MB").padStart(11)}${r.blank ? "  ⚠" : ""}`);
  console.log("");
};

run().catch((e) => { console.error(e); process.exit(1); });
