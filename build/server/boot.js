import * as path from "node:path";
import { readFile, access, stat } from "node:fs/promises";
import { parse } from "ini";
import express from "express";
import { createRequestHandler } from "@remix-run/express";
import compression from "compression";
const DEFAULT_PROGRAM_PORT = 80;
const isStr = (value) => typeof value === "string";
function toNumber(raw) {
  if (raw === void 0)
    return void 0;
  let maybe = Number(raw);
  if (Number.isNaN(maybe))
    return void 0;
  return maybe;
}
async function checkIfFileExists(filePath) {
  try {
    await access(filePath);
    const stats = await stat(filePath);
    return stats.isFile();
  } catch (error) {
  }
  return false;
}
async function getConfig() {
  const programConfigFilename = path.join(process.cwd(), "dxtango.cfg");
  try {
    const iniFileContent = await readFile(programConfigFilename, { encoding: "utf-8" });
    const settingsInput = parse(iniFileContent);
    const welcomeLogo = isStr(settingsInput?.welcome_logo) ? settingsInput?.welcome_logo.trim() : void 0;
    const port = toNumber(settingsInput?.PORT) ?? DEFAULT_PROGRAM_PORT;
    return {
      welcome_logo: welcomeLogo != null && await checkIfFileExists(welcomeLogo) ? welcomeLogo : void 0,
      port
    };
  } catch (e) {
  }
  return {
    port: toNumber(process.env.PORT) ?? DEFAULT_PROGRAM_PORT
  };
}
const BUILD_FILE = "./index.js";
async function main() {
  const config = await getConfig();
  const app = express();
  app.use(compression());
  if (config.welcome_logo != null) {
    app.use("/welcome/logo.svg", (req, res) => {
      const filePath = config.welcome_logo;
      res.sendFile(filePath);
    });
  }
  app.use(
    express.static("build/client", { maxAge: "1h" }),
    express.static("build/client/assets", { immutable: true, maxAge: "1y" }),
    express.static("build/client/build", { immutable: true, maxAge: "1y" })
  );
  const build = await import(BUILD_FILE);
  const ra = createRequestHandler({
    build,
    mode: process.env.NODE_ENV
  });
  app.all("*", [ra]);
  app.listen(config.port, () => {
    console.log(`DXTango listening on port ${config.port}`);
  });
}
await main();
export {
  isStr,
  toNumber
};
