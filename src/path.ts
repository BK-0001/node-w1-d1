import path from "path";

// path of the current file from the root
console.log(__dirname);

// path and the file name from the root
console.log(__filename);

// joining the paths while resolving the paths
console.log(path.resolve("./index.ts"));

// joining the paths given
const path1 = path.join(__dirname, "../tsconfig.json");

console.log(path.parse(path1));

console.log(path1);

console.log(
  path.format({
    root: "/",
    dir: "/Users/bart/ciccc/node-m0124/w1d1",
    base: "tsconfig.json",
    ext: ".json",
    name: "tsconfig"
  })
);
