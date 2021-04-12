const yargs = require("yargs");
const users = require("./user");
// Practice makes perfect.
// Lets create crud operations to manage users in a json file.
// Create a CRUD application and store them in a users.json file
// that you are able to do the following operations:
// 1. Create a user
// 2. Read a user
// 3. Update a user
// 4. Delete a user
// Each user needs at least the following:
// 1. Id
// 2. Name
// 3. Email
// Practice makes perfect.
// Lets create crud operations to manage users in a json file.
// Create a CRUD application and store them in a users.json file
// that you are able to do the following operations:
// 1. Create a user
// 2. Read a user
// 3. Update a user
// 4. Delete a user
// Each user needs at least the following:
// 1. Id
// 2. Name
// 3. Email
yargs.command({
	command: "add",
	describe: "Add user",
	builder: {
		name: {
			describe: "user-name",
			demandOption: true,
			type: "string",
		},
		email: {
			describe: "user email",
			demandOption: true,
			type: "string",
		},
	},
	handler(argv) {
		users.addUser(argv.name, argv.email);
	},
});
// read
yargs.command({
	command: "read",
	describe: "read user",
	builder: {
		name: {
			describe: "user-name",
			demandOption: true,
			type: "string",
		},
	},
	handler(argv) {
		users.readUser(argv.name);
	},
});
// update
yargs.command({
	command: "update",
	describe: "update user",
	builder: {
		name: {
			describe: "user-name",
			demandOption: true,
			type: "string",
		},
		newName: {
			describe: "new name to update",
			type: "string",
		},
		newEmail: {
			describe: "new email to update",
			type: "string",
		},
	},
	handler(argv) {
		users.updateUser(argv.name, argv.newName, argv.newEmail);
	},
});
// delete
yargs.command({
	command: "del",
	describe: "deleting user",
	builder: {
		name: {
			describe: "user-name",
			demandOption: true,
			type: "string",
		},
	},
	handler(argv) {
		users.deleteUser(argv.name);
	},
});

yargs.parse();
