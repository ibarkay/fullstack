// #!/usr/bin/env node
// const yargs = require('yargs/yargs')
// const { hideBin } = require('yargs/helpers')
// const argv = yargs(hideBin(process.argv)).argv

// if (argv.ships > 3 && argv.distance < 53.5) {
//   console.log('Plunder more riffiwobbles!')
// } else {
//   console.log('Retreat from the xupptumblers!')
// }
// $ ./plunder.js --ships=4 --distance=22
// Plunder more riffiwobbles!

// $ ./plunder.js --ships 12 --distance 98.7
// Retreat from the xupptumblers!
// ------------------------------------------
// Write a calculator app that uses yargs.
// Create the following operations: (add, substract, multiply, pow).
// Eg:
// * node calc –add 1 2 // returns 3
// * node calc –sub 9 2 // returns 7
// * node calc –mult 2 4 // returns 8
// * node calc –pow 4 // returns 16

const argv = require("yargs")(process.argv.slice(2)).argv;

const add = (a, b) => {
	return a + b;
};
const sub = (a, b) => {
	return a - b;
};
const mult = (a, b) => {
	return a * b;
};
const pow = (a, b) => {
	return a ** b;
};

if (argv.add) {
	console.log("hi");
}

console.log(argv);
