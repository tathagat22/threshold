import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });

await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
await page.screenshot({ path: "/tmp/threshold-home.png" });

await page.goto("http://localhost:3000/practice/self-inquiry-who-am-i", { waitUntil: "networkidle" });
await page.screenshot({ path: "/tmp/threshold-practice.png" });

await page.click("text=Begin");
await page.waitForTimeout(500);
await page.screenshot({ path: "/tmp/threshold-running.png" });

await page.goto("http://localhost:3000/practices", { waitUntil: "networkidle" });
await page.screenshot({ path: "/tmp/threshold-library.png" });

console.log("done");
await browser.close();
