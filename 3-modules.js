// GLOBALS  - NO WINDOW !!!!
// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require("./4-names.js");
const sayHi = require("./5-utils.js");
require("./7-add-function.js");

sayHi("Susan");
sayHi(names.samira);
sayHi(names.john);
