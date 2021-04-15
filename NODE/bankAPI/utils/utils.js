const db = require("../db/db.json");
const fs = require("fs");
const { query } = require("express");

const displayUser = (passportID) => {
	const client = db.find(
		(client) => client.passportid === passportID.passportid
	);
	if (client) {
		return client;
	} else {
		throw new Error("Cant find the user !");
	}
};

const addUser = (userObj) => {
	const isEexist = db.find((user) => user.passportid === userObj.passportid);
	if (!isEexist) {
		db.push(userObj);

		fs.writeFileSync("./db/db.json", JSON.stringify(db));
		return "User added";
	} else {
		throw new Error("User already exiting");
	}
};

const depositUser = (params) => {
	//! TODO:check if number
	const client = db.find((client) => client.passportid === params.id);
	if (client) {
		const flitteredDB = db.filter((u) => u.passportid !== params.id);
		client.cash += parseInt(params.amount);
		flitteredDB.push(client);
		fs.writeFileSync("./db/db.json", JSON.stringify(flitteredDB));
		return "deposting....done";
	} else {
		throw new Error("Cant find client ");
	}
};

// *DRY -build a function that handle "find user"
const updateCredit = (params) => {
	//! TODO:check if number
	const client = db.find((client) => client.passportid === params.id);
	if (client) {
		const flitteredDB = db.filter((u) => u.passportid !== params.id);
		client.credit += parseInt(params.amount);
		flitteredDB.push(client);
		fs.writeFileSync("./db/db.json", JSON.stringify(flitteredDB));
		return "Credit has been update...";
	} else {
		throw new Error("Cant find client ");
	}
};

const withDraw = (params) => {
	const client = db.find((client) => client.passportid === params.id);
	if (client) {
		if (params.amount < client.cash + client.credit) {
			const sum = client.cash - params.amount;
			if (sum >= 0) {
				client.cash -= params.amount;
				const flitteredDB = db.filter((u) => u.passportid !== params.id);
				flitteredDB.push(client);
				fs.writeFileSync("./db/db.json", JSON.stringify(flitteredDB));
				return "Withdraw succeed , no credit has been used.";
			} else {
				if (sum * -1 < client.credit) {
					client.cash = sum;
					client.credit -= sum * -1;
					const flitteredDB = db.filter((u) => u.passportid !== params.id);
					flitteredDB.push(client);
					fs.writeFileSync("./db/db.json", JSON.stringify(flitteredDB));
					return "Withdraw succeed , credit has been used!.";
				} else {
					throw new Error("Not enough credit");
				}
			}
		} else {
			throw new Error("Not enough credit/cash");
		}
	} else {
		throw new Error("Cant find user");
	}
};

const transfer = (params) => {
	const clientOne = db.find((client) => client.passportid === params.id1);
	const clientTwo = db.find((client) => client.passportid === params.id2);
	if (clientOne && clientTwo) {
		if (withDraw({ id: params.id1, amount: params.amount })) {
			if (depositUser({ id: params.id2, amount: params.amount })) {
				return "transfer success";
			} else {
				throw new Error("cant find user 2");
			}
		} else {
			throw new Error("cant find user 1 or he dont have enough credit");
		}
	} else {
		throw new Error("cant find one of the users, please check again.");
	}
};

const getUser = (params) => {
	const client = db.find((client) => client.passportid === params.id);
	if (client) {
		return client;
	} else {
		throw new Error("cant find User");
	}
};

const fetchQuery = (params) => {
	const filteredDB = db.filter((user) => user.cash == parseInt(params.query));
	if (filteredDB.length > 0) {
		return filteredDB;
	} else {
		throw new Error("nothing has found.");
	}
};

const fetchNP = (params) => {
	if (params.p === "p") {
		let filteredDB = db.filter((user) => user.cash >= 0);
		if (filteredDB.length > 0) {
			return filteredDB;
		} else {
			throw new Error("no positive accounts .");
		}
	} else if (params.p === "n") {
		let filteredDB = db.filter((user) => user.cash < 0);
		if (filteredDB.length > 0) {
			return filteredDB;
		} else {
			throw new Error("no negative accounts .");
		}
	} else {
		throw new Error('params can be "n" for negative and "p" for positive');
	}
};

module.exports = {
	displayUser,
	addUser,
	depositUser,
	updateCredit,
	withDraw,
	transfer,
	getUser,
	fetchQuery,
	fetchNP,
};
