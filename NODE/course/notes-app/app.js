const yargs = require("yargs");
const notes = require("./notes");
const chalk = require("chalk");

// custom Version
yargs.version("1.1.2b");

// crate add
yargs.command({
	command: "add",
	describe: "add a new note",
	builder: {
		title: {
			describe: "note title",
			demandOption: true,
			type: "string",
		},
		body: {
			describe: "body text",
			demandOption: true,
			type: "string",
		},
	},
	handler(argv) {
		notes.addNote(argv.title, argv.body);
	},
});
// create remove
yargs.command({
	command: "remove",
	describe: "remove a note",
	builder: {
		title: {
			describe: "Note title",
			demandOption: true,
			type: "string",
		},
	},
	handler(argv) {
		notes.removeNote(argv.title);
	},
});
// create read
yargs.command({
	command: "read",
	describe: "read a note",
	builder: {
		title: {
			describe: "note title",
			demandOption: true,
			type: "string",
		},
	},
	handler(argv) {
		notes.readNote(argv.title);
	},
});
// create list
yargs.command({
	command: "list",
	describe: "list your notes",
	handler() {
		notes.listNotes();
	},
});
yargs.parse();
