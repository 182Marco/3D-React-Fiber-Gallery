// Rigenera le anteprime della galleria in public/thumbs/<Progetto>.png
// (poi convertirle in JPEG ~640px, es. con `sips -Z 640 -s format jpeg
// -s formatOptions 78 in.png --out public/thumbs/Nome.jpg`).
//
// Uso (Node 18+, Google Chrome installato):
//   npm run build
//   npm i --no-save playwright-core
//   mkdir -p /tmp/site && ln -sfn "$PWD/build" /tmp/site/3D-React-Fiber-Gallery
//   (cd /tmp/site && python3 -m http.server 8765 &)
//   node scripts/make-thumbs.mjs /tmp/thumbs [Bike Dog ...]   # senza nomi: tutti
//
// Rendering software (swiftshader): ogni scena richiede ~25s. Si usa il deep
// link #/nome (niente modale della galleria, che comunque viene nascosta).
import { chromium } from "playwright-core";
import fs from "fs";

const ALL = ["Bike", "CartFollowingMidget", "Dog", "Explode", "Home3d", "PortalPass", "slideShow", "Woman", "Portal", "PhotoWorld"];
const [out, ...rest] = process.argv.slice(2);
const names = rest.length ? rest : ALL;
const BASE = process.env.BASE_URL ?? "http://localhost:8765/3D-React-Fiber-Gallery/";
const HIDE_UI = ".gallery-bar,.scene-hint,.params-panel,.overlay-slideShow,.w100-scroll{display:none!important}";

fs.mkdirSync(out, { recursive: true });
const browser = await chromium.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: true,
  args: ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist"],
});

for (const name of names) {
  // Explode: l'uccello è piccolo, si renderizza grande a densità doppia e si
  // ritaglia il centro (così resta nitido, non è un ingrandimento).
  const zoom = name === "Explode";
  const ctx = await browser.newContext({
    viewport: zoom ? { width: 1280, height: 832 } : { width: 640, height: 416 },
    deviceScaleFactor: zoom ? 2 : 1,
  });
  const page = await ctx.newPage();
  await page.goto(`${BASE}#/${name.toLowerCase()}`);
  await page.addStyleTag({ content: HIDE_UI + ",.gallery-overlay{display:none!important}" });
  await page.waitForTimeout(25000);
  // page.screenshot va in timeout con il rendering software: si passa dal CDP
  const client = await ctx.newCDPSession(page);
  const { data } = await client.send("Page.captureScreenshot", {
    format: "png",
    ...(zoom ? { clip: { x: 379, y: 235, width: 523, height: 340, scale: 1.53 } } : {}),
  });
  fs.writeFileSync(`${out}/${name}.png`, Buffer.from(data, "base64"));
  console.log("done", name);
  await ctx.close();
}
await browser.close();
