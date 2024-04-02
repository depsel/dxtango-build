import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import url from "node:url";
import { installGlobals } from "@remix-run/node";
import { createRequestHandler } from "@remix-run/express";
import compression from "compression";
import express from "express";

process.env.NODE_ENV = process.env.NODE_ENV ?? "production";

installGlobals();

run();

function parseNumber(raw) {
  if (raw === undefined) return undefined;
  let maybe = Number(raw);
  if (Number.isNaN(maybe)) return undefined;
  return maybe;
}

async function run() {
  let port = parseNumber(process.env.PORT) ?? 3000;

  let buildPathArg = process.argv[2];

  if (!buildPathArg) {
    console.error(`Usage: remix-serve <server-build-path> - e.g. remix-serve build/index.js`);
    process.exit(1);
  }

  let buildPath = path.resolve(buildPathArg);
  // let versionPath = path.resolve(buildPath, "..", "version.txt");

  async function reimportServer() {
    let stat = fs.statSync(buildPath);

    // use a timestamp query parameter to bust the import cache
    return import(url.pathToFileURL(buildPath).href + "?t=" + stat.mtimeMs);
  }

  let build = await reimportServer();

  let onListen = () => {
    let address =
      process.env.HOST ||
      Object.values(os.networkInterfaces())
        .flat()
        .find((ip) => String(ip?.family).includes("4") && !ip?.internal)
        ?.address;

    if (!address) {
      console.log(`[remix-serve] http://localhost:${port}`);
    } else {
      console.log(
        `[remix-serve] http://localhost:${port} (http://${address}:${port})`
      );
    }
  };

  let app = express();
  app.disable("x-powered-by");
  app.use(compression());
  app.use(
    build.publicPath,
    express.static(build.assetsBuildDirectory, {
      immutable: true,
      maxAge: "1y",
    })
  );
  app.use(express.static("public", { maxAge: "1h" }));
  // app.use(morgan("tiny"));

  app.all(
    "*",
    createRequestHandler({
      build,
      mode: process.env.NODE_ENV,
    })
  );

  let server = process.env.HOST
    ? app.listen(port, process.env.HOST, onListen)
    : app.listen(port, onListen);

  ["SIGTERM", "SIGINT"].forEach((signal) => {
    process.once(signal, () => server?.close(console.error));
  });
}
