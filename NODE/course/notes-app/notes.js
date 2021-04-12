const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body) => {
	const notes = loadNotes();
	const duplicateNote = notes.find((note) => note.title === title);

	if (!duplicateNote) {
		notes.push({
			title: title,
			body: body,
		});

		saveNotes(notes);
		const chak = chalk.green.inverse("new note added");
		console.log(chak);
	} else {
		const chak = chalk.green.inverse("note title taken");
		console.log(chak);
	}
};

const saveNotes = (notes) => {
	const dataJSON = JSON.stringify(notes);
	fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
	try {
		const dataBuffer = fs.readFileSync("notes.json");
		const dataJSON = dataBuffer.toString();
		return JSON.parse(dataJSON);
	} catch (e) {
		return [];
	}
};

const removeNote = (title) => {
	const notes = loadNotes();
	const duplicateNotes = notes.filter((note) => {
		return note.title !== title;
	});
	if (notes.length > duplicateNotes.length) {
		const chak = chalk.green.inverse("removed");
		console.log(chak);
		saveNotes(duplicateNotes);
	} else {
		const chak = chalk.red.inverse("not found");
		console.log(chak);
	}
};
const listNotes = () => {
	const notes = loadNotes();
	console.log(chalk.inverse("Your notes"));
	notes.forEach((note) => {
		console.log(note.title);
	});
};
const readNote = (title) => {
	const notes = loadNotes();
	const note = notes.find((n) => n.title === title);
	if (note) {
		console.log(chalk.inverse(note.title + ":"));
		console.log(note.body);
	} else {
		console.log(chalk.red.inverse("note not found"));
	}
};

module.exports = {
	addNote: addNote,
	removeNote: removeNote,
	listNotes: listNotes,
	readNote: readNote,
};
