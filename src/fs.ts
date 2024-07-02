import { appendFileSync, readFileSync, unlinkSync, writeFileSync } from "fs";
import path from "path";

const string = readFileSync(path.join(__dirname, "../public/index.html"), {
  encoding: "utf8"
});

console.log(string);

writeFileSync(
  path.join(__dirname, "../public/example.txt"),
  "Can you save me?\n"
);

appendFileSync(path.join(__dirname, "../public/example.txt"), "Yes!!\n");

unlinkSync(path.join(__dirname, "../public/example.txt"));
