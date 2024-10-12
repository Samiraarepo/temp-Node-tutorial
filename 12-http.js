const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to our home page...");
  }
  if (req.url === "/about") {
    res.end("Here is our short story!");
  }
  res.end(`
    <h1>Oopsss!!</h1>
    <p>we can't seem the page that you were looking for...</p>
    <a href="/">Back to home</a>
    `);
});

server.listen(5000);
