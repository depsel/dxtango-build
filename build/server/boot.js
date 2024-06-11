import * as path from 'node:path';
import { readFile } from 'node:fs/promises';
import { parse } from 'ini';
import express from 'express';
import { createRequestHandler } from '@remix-run/express';
import compression from 'compression';

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
    const settingsInput = parse(iniFileContent);
    const port = toNumber(settingsInput?.port);
    if (port != null)
      return port;
  } catch (e) {
  }
  return toNumber(process.env.PORT) ?? DEFAULT_PROGRAM_PORT;
}
const BUILD_FILE = "./index.js";
async function main() {
  const port = await getPort();
  const app = express();
  app.use(compression());
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
  app.listen(port, () => {
    console.log(`DXTango listening on port ${port}`);
  });
}
await main();

export { toNumber };
