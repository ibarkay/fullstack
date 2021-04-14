const express = require("express");
const app = express();
const { createMovie, editMovie, deleteMovie, getMovie } = require("./utils");
const PORT = 3000;
const jdb = require("./db.json");
const fs = require("fs");

app.use(express.json());

app.get("/", (req, res) => {
	res.send(jdb);
});
app.post("/", (req, res) => {
	const obj = req.body;
	createMovie(obj);
	res.send("posting posting all day long :)");
});

app.get("/:name", (req, res) => {
	const requast = req.params.name;
	try {
		res.send(getMovie(requast));
	} catch (e) {
		res.send(e.message);
	}
});

app.put("/:name", (req, res) => {
	const reqy = req.params.name;
	const reqBody = req.body;
	try {
		editMovie(reqy, reqBody);
		res.send("putputput puting all day long :)");
	} catch (e) {
		res.send(e.message);
	}
});

app.delete("/:name", (req, res) => {
	const reqy = req.params.name;
	const reqBody = req.body;
	try {
		deleteMovie(reqy, reqBody);
		res.send("delete");
	} catch (e) {
		res.send(e.message);
	}
});

app.listen(PORT, () => {
	console.log("listening on http://localhost:3000");
});
