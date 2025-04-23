// src/index.ts
import { cwd } from "node:process";
import compressing from "compressing";
import path from "path";
var buildCompress = (options) => {
  const inputDir = options?.inputDir || "dist";
  const outputFileName = options?.outputFileName || "dist.zip";
  const rootPath = cwd();
  const buildPath = path.resolve(rootPath, inputDir);
  return {
    name: "vite-plugin-build-compress",
    apply: "build",
    closeBundle: {
      async handler() {
        compressing.zip.compressDir(buildPath, `${outputFileName}`, {
          ignoreBase: true
        }).then((res) => {
          console.log("compress done");
        }).catch((err) => {
          console.log("compress failed");
        });
      }
    }
  };
};
var index_default = buildCompress;
export {
  index_default as default
};
