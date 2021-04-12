const getNotes = require("./notes");
const chalk = require("chalk");

console.log(chalk.bold.green("hello world"));
const warning = chalk.green.bgBlue.inverse("warning!");
console.log(warning);

// const add = require("./util");
// const sum = add(1, 5);
// console.log(sum);
