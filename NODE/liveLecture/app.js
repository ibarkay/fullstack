const express = require("express");
const app = express();
const { findUsers } = require("./utils");
const PORT = 3000;

app.use(express.json());

app.get("/api/users", (req, res) => {
	const useres = findUsers();
	res.status(200).send(useres);
	console.log(useres);
});

app.post("/api/u sers", (req, res) => {
	console.log(req.body);
});

app.get("/:name", (req, res) => {
  
});

app.listen(PORT, () => {
	console.log("listening on http://localhost:3000");
});
