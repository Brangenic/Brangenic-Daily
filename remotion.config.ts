import { Config } from "@remotion/cli/config";
import { existsSync } from "node:fs";

Config.setVideoImageFormat("jpeg");
Config.setOverwriteOutput(true);
// Production media lives in ./assets, so staticFile("live/shot-01.mp4")
// resolves to assets/live/shot-01.mp4.
Config.setPublicDir("assets");
// Concurrency is left to Remotion's auto-detection; override here if needed.

/*
 * In sandboxed/headless environments Remotion's own browser download can be
 * blocked by network policy. If a system Chromium is available — via the
 * REMOTION_BROWSER_EXECUTABLE env var or the known pre-installed path — use it
 * and relax TLS verification so Google Fonts still load behind a MITM proxy.
 * On a normal machine none of this applies and Remotion downloads its browser.
 */
const candidate =
  process.env.REMOTION_BROWSER_EXECUTABLE ??
  "/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell";
if (existsSync(candidate)) {
  Config.setBrowserExecutable(candidate);
  Config.setChromiumIgnoreCertificateErrors(true);
}
