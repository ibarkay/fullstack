const yargs = require("yargs");

yargs.command({
	command: "add",
	describe: "add 2",
	builder: {
		num1: {
			describe: "first number",
			demandOptions: true,
			type: "integer",
		},
		num2: {
			describe: "seconde number",
			demandOptions: true,
			type: "integer",
		},
	},
	handler({ num1, num2 }) {
		console.log(num1, num2);
	},
});

yargs.parse();
