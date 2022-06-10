import fs from "fs";
import path from "path";

export default (destination, folderName, fileName, fileData) =>
  new Promise((resolve, reject) => {
    fs.appendFile(
      path.join(destination, folderName, fileName),
      fileData,
      (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      }
    );
  });
