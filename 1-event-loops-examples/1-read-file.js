// const _ = require("lodash");

// const items = [1, [2, [3, [4]]]];

// const newItems = _.flattenDeep(items);
// console.log(newItems);
// console.log("Hello World!!");

const { readFile } = require("fs");

console.log("started first task.");
readFile("../content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log("completed first task.");
});
console.log("started next task!");
