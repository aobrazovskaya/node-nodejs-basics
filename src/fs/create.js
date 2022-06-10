import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const create = async () => {
  const context = "I am fresh and young";
  const errMessage = "FS operation failed";

  fs.writeFile(
    path.join(__dirname, "files", "fresh.txt"),
    context,
    (err) => {
      if (err) throw err;
      console.log(errMessage);
    }
  );
};

await create();
