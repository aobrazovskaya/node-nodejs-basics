import fs from "fs";
import path from "path";

export default (destination, folderName) =>
  new Promise((resolve, reject) => {
    fs.mkdir(path.join(destination, folderName), (err) => {
      if (err) {
        reject(err);
      } else {
        console.log("Папка была создана");
        resolve();
      }
    });
  });
