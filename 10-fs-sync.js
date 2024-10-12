const { readFileSync, writeFileSync } = require("fs");

const readFirst = readFileSync("./content/first.txt", "utf8");
const readSecond = readFileSync("./content/second.txt", "utf8");

console.log(readFirst, readSecond);

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result, ${readFirst}, ${readSecond}`,
  { flag: "a" }
);
