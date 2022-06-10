import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import mkdirPromise from "../utils/createFolder.js";
import readFileFn from "../utils/readFile.js";
import appendFileFn from "../utils/appendFile.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const copy = async () => {
  const folderName = "files";
  const newFolderName = "files_copy";

  fs.readdir(path.join(__dirname, folderName), async (err, files) => {
    if (err) throw err;

    if (Array.isArray(files) && files.length > 0) {
      await mkdirPromise(__dirname, newFolderName);

      files.forEach((file) => {
        readFileFn(__dirname, folderName, file).then((data) => {
          appendFileFn(__dirname, newFolderName, file, data);
        });
      });
    }
  });
};

await copy();
