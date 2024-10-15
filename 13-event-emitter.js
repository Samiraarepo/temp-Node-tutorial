const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log(`data was recived, from : ${name}: ${id}`);
});

customEmitter.on("response", () => {
  console.log("Another simple logic here!");
});
customEmitter.emit("response", "samira", 71);
