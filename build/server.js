import * as fs from "node:fs";
import { readFile } from "node:fs/promises";
import * as path from "node:path";
import * as url from "node:url";
import express from "express";
import compression from "compression";
import { createRequestHandler } from "@remix-run/express";
import { installGlobals } from "@remix-run/node";
import { parse as parseINI } from "ini";
const DEFAULT_PROGRAM_PORT = 3e3;
function toNumber(raw) {
  if (raw === void 0)
    return void 0;
  let maybe = Number(raw);
  if (Number.isNaN(maybe))
    return void 0;
  return maybe;
}
async function getPort() {
  const programConfigFilename = path.join(process.cwd(), "dxtango.cfg");
  try {
    const iniFileContent = await readFile(programConfigFilename, { encoding: "utf-8" });
    const settingsInput = parseINI(iniFileContent);
    const port = toNumber(settingsInput?.port);
    if (port != null)
      return port;
  } catch (e) {
  }
  return toNumber(process.env.PORT) ?? DEFAULT_PROGRAM_PORT;
}
const BUILD_PATH = path.resolve("build/bundle.js");
const VERSION_PATH = path.resolve("build/version.txt");
async function main() {
  installGlobals();
  const port = await getPort();
  const build = await reimportServer();
  const app = express();
  app.use(compression());
  app.disable("x-powered-by");
  app.use(
    "/build",
    express.static("public/build", { immutable: true, maxAge: "1y" })
  );
  app.use(express.static("public", { maxAge: "1h" }));
  app.all(
    "*",
    createRequestHandler({
      build,
      mode: process.env.NODE_ENV
    })
  );
  app.listen(port, async () => {
    console.log(`Express server listening on port ${port}`);
  });
  async function reimportServer() {
    const stat = fs.statSync(BUILD_PATH);
    const BUILD_URL = url.pathToFileURL(BUILD_PATH).href;
    console.log(BUILD_URL);
    return import(BUILD_URL + "?t=" + stat.mtimeMs);
  }
}
await main();
export {
  toNumber
};
