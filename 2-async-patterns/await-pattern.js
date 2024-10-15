const { writeFile, readFile } = require("fs").promises;
// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf8");
    const second = await readFile("./content/second.txt", "utf8");
    await writeFile(
      "./content/result-mind-grande.txt",
      `THIS IS AWESOME TEXT: ${first} ${second}`,
      { flag: "a" }
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();

// const getTxt = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (result, err) => {
//       if (err) {
//         reject(err);
//         return;
//       } else {
//         resolve(result);
//       }
//     });
//   });
// };
// getTxt("./content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => {
//     console.log(err);
//   });
