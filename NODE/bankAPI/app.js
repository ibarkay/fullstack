const express = require("express");
const app = express();
const db = require("./db/db.json");
const {
	displayUser,
	addUser,
	depositUser,
	updateCredit,
	withDraw,
	transfer,
	getUser,
	fetchQuery,
	fetchNP,
} = require("./utils/utils");
app.use(express.json());

// ?Get all users
app.get("/users", (req, res) => {
	res.send(db);
});

// ?Show details of user
app.get("/users/:id", (req, res) => {
	try {
		res.status(200).send(getUser(req.params));
	} catch (e) {
		res.status(404).send(e.message);
	}
});

// ?Get info Single User
app.get("/users/:passportid", (req, res) => {
	try {
		res.status(200).send(displayUser(req.params));
	} catch (e) {
		res.status(404).send(e.message);
	}
});

// ?Add User
app.post("/users", (req, res) => {
	try {
		res.status(200).send(addUser(req.body));
	} catch (e) {
		res.status(400).send(e.message);
	}
});
// ?Deposit
app.put("/users/:id/deposit/:amount", (req, res) => {
	try {
		res.status(200).send(depositUser(req.params));
	} catch (e) {
		res.status(400).send(e.message);
	}
});
// ?EditCredit
// Update credit -Can update a users credit (only positive numbers)
app.put("/users/:id/credit/:amount", (req, res) => {
	try {
		res.status(200).send(updateCredit(req.params));
	} catch (e) {
		res.status(400).send(e.message);
	}
});

// ?Withdraw
app.post("/users/:id/withdraw/:amount", (req, res) => {
	try {
		res.status(200).send(withDraw(req.params));
	} catch (e) {
		res.status(400).send(e.message);
	}
});

// ?Transfer
app.post("/users/transfer/:id1/:id2/:amount", (req, res) => {
	try {
		res.status(200).send(transfer(req.params));
	} catch (e) {
		res.status(400).send(e.message);
	}
});

// Hero:
// ?Filter users by cash
app.get("/users/query/:query", (req, res) => {
	try {
		res.status(200).send(fetchQuery(req.params));
	} catch (e) {
		res.status(400).send(e.message);
	}
});

// ?Filter by negetive of positive
app.get("/users/np/:p", (req, res) => {
	try {
		res.status(200).send(fetchNP(req.params));
	} catch (e) {
		res.status(400).send(e.message);
	}
});
// TODO:ninja
// Ninja:
// Add a new field for a user: IsActiveIsActive determines if the account is active or not.
// 1. If the user is not active, you cannot do anything with that user.
// 2. Fetch the users that are active and have a specified amount of cash.
// *listener
app.listen(3000, () => {
	console.log(
		"   ▐▀▄      ▄▀▌   ▄▄▄▄▄▄▄             \n   ▌▒▒▀▄▄▄▄▀▒▒▐▄▀▀▒██▒██▒▀▀▄         \n  ▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▀▄        \n ▌▒▒▒▒▒▒▒▒▒▒▒▒▒▄▒▒▒▒▒▒▒▒▒▒▒▒▒▀▄     \n▀█▒▒█▌▒▒█▒▒▐█▒▒▀▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▌    \n▀▌▒▒▒▒▒▀▒▀▒▒▒▒▒▀▀▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▐  ▄▄\n▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▌▄█▒█\n▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▐▒█▀ \n▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▐▀  \n▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▌    \n▌▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▐     \n▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▌     \n ▌▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▐      \n ▐▄▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▄▌      \n   ▀▄▄▀▀▀▀▄▄▀▀▀▀▀▀▄▄▀▀▀▀▀▀▄▄▀       \n \n"
	);
	console.log("S3cu7e B4nk 0n http://localhost:3000");
});
