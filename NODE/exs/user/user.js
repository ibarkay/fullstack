const fs = require("fs");
const chalk = require("chalk");
const uniqid = require("uniqid");

const loadUsers = () => {
	try {
		const dataBuffer = fs.readFileSync("users.json");
		const dataJSON = dataBuffer.toString();
		return JSON.parse(dataJSON);
	} catch (e) {
		return [];
	}
};

const saveUser = (users) => {
	const dataJSON = JSON.stringify(users);
	fs.writeFileSync("users.json", dataJSON);
};

const addUser = (name, email) => {
	const users = loadUsers();
	const duplicateUser = users.find((user) => user.name === name);
	if (!duplicateUser) {
		users.push({
			name: name,
			email: email,
			id: uniqid(),
		});
		saveUser(users);
	}
};
const readUser = (name) => {
	const users = loadUsers();
	const user = users.find((user) => user.name === name);
	if (user) {
		console.log(
			chalk.inverse("User name and emali : " + user.name + " " + user.email)
		);
	} else {
		console.log(chalk.red.inverse("User not found"));
	}
};
const updateUser = (name, newName, newEmail) => {
	const users = loadUsers();
	const user = users.find((user) => user.name === name);
	if (user) {
		const newUsers = users.filter((user) => user.name !== name);
		if (newName) {
			user.name = newName;
		}
		if (newEmail) {
			user.email = newEmail;
		}
		newUsers.push(user);
		saveUser(users);
	} else {
		console.log(chalk.red.inverse("Error"));
	}
};

const deleteUser = (name) => {
	const users = loadUsers();
	const newUsers = users.filter((user) => user.name !== name);
	console.log("here");
	saveUser(newUsers);
};

module.exports = {
	addUser: addUser,
	readUser: readUser,
	updateUser: updateUser,
	deleteUser: deleteUser,
};
