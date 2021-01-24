import path from "path";
import { https } from "firebase-functions";
import next from "next";
import { distDir } from "./next.config.js";
const isDev = process.env.NODE_ENV !== "production";
const nextjsDistDir = path.join("src", distDir);

const nextjsServer = next({
  dev: isDev,
  conf: {
    distDir: nextjsDistDir,
    i18n: null,
  },
});
const nextjsHandle = nextjsServer.getRequestHandler();

exports.nextjsFunc = https.onRequest((req, res) => {
  return nextjsServer.prepare().then(() => nextjsHandle(req, res));
});
