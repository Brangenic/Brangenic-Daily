/**
 * Auto-records the Realm web demo into the screen recordings the Remotion
 * project expects: assets/screen/rec-01.mp4 … rec-12.mp4 (1920×1080, H.264, 30fps).
 *
 * Usage:
 *   node scripts/record-demo.mjs                # record all twelve
 *   node scripts/record-demo.mjs 2 5 7          # record only those numbers
 *   node scripts/record-demo.mjs --selftest     # validate the pipeline on a stub page
 *
 * Prerequisite: place realm-web-demo.html in the project root (or set DEMO_HTML).
 * Chromium is the pre-installed Playwright build; ffmpeg (libx264) converts the
 * recorded .webm to .mp4.
 */
import { chromium } from "playwright";
import http from "node:http";
import { createReadStream, existsSync, mkdirSync, readdirSync, renameSync, rmSync, statSync, writeFileSync } from "node:fs";
import { dirname, extname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const HTML_PATH = process.env.DEMO_HTML ? resolve(process.env.DEMO_HTML) : join(ROOT, "realm-web-demo.html");
const OUT_DIR = join(ROOT, "assets", "screen");
const TMP_DIR = join(ROOT, ".rec-tmp");
const CHROME = process.env.REMOTION_BROWSER_EXECUTABLE ?? "/opt/pw-browsers/chromium-1194/chrome-linux/chrome";
const SIZE = { width: 1920, height: 1080 };
const SELFTEST = process.argv.includes("--selftest");

const MIME = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".png": "image/png", ".jpg": "image/jpeg", ".svg": "image/svg+xml", ".webp": "image/webp", ".woff2": "font/woff2" };

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

// ---- human-like pacing helpers ---------------------------------------------
const pause = (page, ms) => page.waitForTimeout(ms);

const moveMouse = async (page, x, y, steps = 24) => {
  await page.mouse.move(x, y, { steps });
  await pause(page, 500);
};

const smoothScroll = async (page, totalY, steps = 10, perStep = 90) => {
  const dy = totalY / steps;
  for (let i = 0; i < steps; i++) {
    await page.mouse.wheel(0, dy);
    await pause(page, perStep);
  }
  await pause(page, 500);
};

const gotoHash = async (page, base, hash) => {
  await page.goto(base + hash, { waitUntil: "networkidle" });
  await pause(page, 1500);
};

/** Resilient click: try role/button/link/any text; warn and continue if absent. */
const clickText = async (page, rx, { timeout = 2500 } = {}) => {
  const attempts = [
    () => page.getByRole("button", { name: rx }),
    () => page.getByRole("link", { name: rx }),
    () => page.getByText(rx, { exact: false }),
  ];
  for (const make of attempts) {
    const loc = make().first();
    try {
      await loc.waitFor({ state: "visible", timeout });
      const b = await loc.boundingBox();
      if (b) await moveMouse(page, b.x + b.width / 2, b.y + b.height / 2, 16);
      await loc.click({ timeout });
      await pause(page, 800);
      return true;
    } catch {
      /* try next strategy */
    }
  }
  console.warn(`      · could not find "${rx}" — skipping (check the demo's markup)`);
  return false;
};

const loginAs = async (page, base, role) => {
  await gotoHash(page, base, "#/login");
  await clickText(page, new RegExp(`^${role}$`, "i"));
  await clickText(page, /log ?in/i);
  await pause(page, 1200);
};

// ---- the twelve recordings --------------------------------------------------
const RECORDINGS = [
  { n: 1, name: "Homepage", run: async (p, b) => {
      await gotoHash(p, b, "#/");
      await smoothScroll(p, 2600, 12);
      for (const label of [/agents?/i, /developers?/i, /property manager/i]) {
        const c = p.getByText(label).first();
        try { const bx = await c.boundingBox(); if (bx) await moveMouse(p, bx.x + bx.width / 2, bx.y + bx.height / 2); } catch {}
      }
      await smoothScroll(p, 1600, 10);
    } },
  { n: 2, name: "Agent Today", run: async (p, b) => {
      await loginAs(p, b, "Agent");
      await gotoHash(p, b, "#/app/dashboard");
      await moveMouse(p, 640, 460);
      await clickText(p, /whatsapp/i);
      await pause(p, 2000);
    } },
  { n: 3, name: "Send a form", run: async (p, b) => {
      await loginAs(p, b, "Agent");
      await gotoHash(p, b, "#/app/dashboard");
      await clickText(p, /send a form/i);
      await pause(p, 1200);
      await clickText(p, /send via whatsapp/i);
      await pause(p, 2000);
    } },
  { n: 4, name: "Deals board", run: async (p, b) => {
      await loginAs(p, b, "Agent");
      await gotoHash(p, b, "#/app/deals");
      await smoothScroll(p, 1200, 8);
      await clickText(p, /move to/i);
      await clickText(p, /preview client view/i);
      await pause(p, 3000);
    } },
  { n: 5, name: "Seller report", run: async (p, b) => {
      await loginAs(p, b, "Agent");
      await gotoHash(p, b, "#/app/properties");
      await clickText(p, /12 barbican/i);
      await pause(p, 1000);
      await clickText(p, /make my seller report/i);
      await pause(p, 4000);
    } },
  { n: 6, name: "Money", run: async (p, b) => {
      await loginAs(p, b, "Agent");
      await gotoHash(p, b, "#/app/money");
      const sliders = await p.locator('input[type="range"]').all();
      for (const s of sliders.slice(0, 3)) {
        const bx = await s.boundingBox();
        if (!bx) continue;
        await p.mouse.move(bx.x + 6, bx.y + bx.height / 2, { steps: 8 });
        await p.mouse.down();
        await p.mouse.move(bx.x + bx.width * 0.7, bx.y + bx.height / 2, { steps: 20 });
        await p.mouse.up();
        await pause(p, 800);
      }
      await pause(p, 2000);
    } },
  { n: 7, name: "Website builder", run: async (p, b) => {
      await loginAs(p, b, "Agent");
      await gotoHash(p, b, "#/app/website");
      await clickText(p, /template/i);
      await clickText(p, /preview my site/i);
      await pause(p, 1500);
      await clickText(p, /close|done/i);
      await clickText(p, /view page/i);
      await pause(p, 3000);
    } },
  { n: 8, name: "Developer overview", run: async (p, b) => {
      await loginAs(p, b, "Developer");
      await gotoHash(p, b, "#/dev/overview");
      await pause(p, 1500);
      await gotoHash(p, b, "#/dev/units");
      for (let i = 0; i < 3; i++) { await clickText(p, /unit|A\d|B\d/i); }
      await gotoHash(p, b, "#/dev/buyers");
      await smoothScroll(p, 1200, 8);
    } },
  { n: 9, name: "Developer updates + lender report", run: async (p, b) => {
      await loginAs(p, b, "Developer");
      await gotoHash(p, b, "#/dev/updates");
      await clickText(p, /publish update/i);
      await gotoHash(p, b, "#/dev/reports");
      await pause(p, 3000);
    } },
  { n: 10, name: "PM portal", run: async (p, b) => {
      await loginAs(p, b, "Property manager");
      await gotoHash(p, b, "#/pm/overview");
      await pause(p, 1500);
      await gotoHash(p, b, "#/pm/budget");
      await smoothScroll(p, 1400, 10);
      await gotoHash(p, b, "#/pm/amenities");
      await clickText(p, /book|open|available/i);
      await clickText(p, /book|open|available/i);
    } },
  { n: 11, name: "Resident portal", run: async (p, b) => {
      await loginAs(p, b, "Property manager");
      await gotoHash(p, b, "#/pm/overview");
      await clickText(p, /preview resident portal/i);
      await pause(p, 1000);
      await clickText(p, /pay now/i);
      await clickText(p, /court|slot|book/i);
      await pause(p, 3000);
    } },
  { n: 12, name: "Pricing", run: async (p, b) => {
      await gotoHash(p, b, "#/pricing");
      await smoothScroll(p, 3200, 16, 110);
    } },
];

// ---- recording driver -------------------------------------------------------
const ensureDirs = () => {
  mkdirSync(OUT_DIR, { recursive: true });
  rmSync(TMP_DIR, { recursive: true, force: true });
  mkdirSync(TMP_DIR, { recursive: true });
};

const transcode = (webm, mp4) => {
  execFileSync("ffmpeg", ["-y", "-i", webm, "-vf", "scale=1920:1080:flags=lanczos,fps=30", "-c:v", "libx264", "-preset", "medium", "-crf", "20", "-pix_fmt", "yuv420p", "-movflags", "+faststart", mp4], { stdio: "ignore" });
};

const durationOf = (file) => {
  try {
    return Number(execFileSync("ffprobe", ["-v", "error", "-show_entries", "format=duration", "-of", "default=noprint_wrappers=1:nokey=1", file]).toString().trim());
  } catch {
    return 0;
  }
};

const looksBlank = async (page) => {
  try {
    const text = (await page.evaluate(() => document.body?.innerText ?? "")).trim();
    return text.length < 12;
  } catch {
    return true;
  }
};

const recordOne = async (browser, base, rec, initialWaitMs) => {
  const context = await browser.newContext({ viewport: SIZE, deviceScaleFactor: 1, recordVideo: { dir: TMP_DIR, size: SIZE } });
  const page = await context.newPage();
  let blank = false;
  try {
    await gotoHash(page, base, "#/");
    await pause(page, initialWaitMs);
    blank = await looksBlank(page);
    await rec.run(page, base);
  } catch (err) {
    console.warn(`      ! ${rec.name} flow error: ${err.message}`);
  }
  await pause(page, 600);
  const video = page.video();
  await context.close(); // finalizes the .webm
  const webm = video ? await video.path() : null;
  const mp4 = join(OUT_DIR, `rec-${String(rec.n).padStart(2, "0")}.mp4`);
  if (webm && existsSync(webm)) {
    transcode(webm, mp4);
    rmSync(webm, { force: true });
  }
  return { mp4, blank };
};

const run = async () => {
  const nums = process.argv.slice(2).filter((a) => /^\d+$/.test(a)).map(Number);
  const list = nums.length ? RECORDINGS.filter((r) => nums.includes(r.n)) : RECORDINGS;

  if (!SELFTEST && !existsSync(HTML_PATH)) {
    console.error(`\n✗ Demo HTML not found: ${HTML_PATH}\n  Put realm-web-demo.html in the project root (or set DEMO_HTML) and re-run.\n`);
    process.exit(2);
  }

  ensureDirs();
  let serveDir = dirname(HTML_PATH);
  let indexFile = "realm-web-demo.html";
  if (SELFTEST) {
    serveDir = TMP_DIR;
    indexFile = "selftest.html";
    writeFileSync(join(TMP_DIR, indexFile), `<!doctype html><meta charset=utf8><body style="margin:0;background:#14523c;color:#fff;font:600 90px/1.2 sans-serif;display:grid;place-items:center;height:100vh">Realm · pipeline OK</body>`);
  }

  const server = await startServer(serveDir, indexFile);
  const base = `http://127.0.0.1:${server.address().port}/`;
  const browser = await chromium.launch({ executablePath: CHROME, headless: true, args: ["--no-sandbox", "--force-color-profile=srgb"] });

  const rows = [];
  const toRun = SELFTEST ? [{ n: 0, name: "selftest", run: async (p) => { await pause(p, 2500); } }] : list;
  for (const rec of toRun) {
    console.log(`  ▸ rec-${String(rec.n).padStart(2, "0")} · ${rec.name}`);
    const { mp4, blank } = await recordOne(browser, base, rec, 1500);
    const dur = durationOf(mp4);
    const size = existsSync(mp4) ? statSync(mp4).size : 0;
    rows.push({ file: mp4.replace(ROOT + "/", ""), dur, size, blank });
    if (blank) console.warn(`      ⚠ page looked blank — re-run rec-${rec.n} with a longer wait if fonts/images failed`);
  }

  await browser.close();
  await new Promise((r) => server.close(r));
  rmSync(TMP_DIR, { recursive: true, force: true });

  console.log("\n  file                              duration    size");
  console.log("  " + "-".repeat(52));
  for (const r of rows) {
    console.log(`  ${r.file.padEnd(34)}${(r.dur.toFixed(1) + "s").padStart(8)}${((r.size / 1e6).toFixed(1) + " MB").padStart(11)}${r.blank ? "  ⚠ blank?" : ""}`);
  }
  console.log("");
};

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
