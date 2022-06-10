import fs from "fs";
import path from "path";

export default (destination, folderName, fileName) =>
  new Promise((resolve, reject) => {
    fs.readFile(
      path.join(destination, folderName, fileName),
      "utf-8",
      (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      }
    );
  });
