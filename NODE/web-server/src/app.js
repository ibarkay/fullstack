const path = require("path");
const express = require("express");

const app = express();

const publicDir = path.join(__dirname, "../public");
// app.com
// app.com/about
app.set("view engine", "hbs"); //COOL!
app.use(express.static(publicDir));

app.get("", (req, res) => {
	res.render("index", {
		title: "iftach",
		name: "iftachb",
	});
});

app.get("/about", (req, res) => {
	res.render("about", {
		title: "blah",
		name: "iftach",
	});
});
app.get("/help", (req, res) => {
	res.render("about", {
		title: "help",
		name: "give you help",
	});
});

app.get("/weather", (req, res) => {
	res.send([
		{
			city: "yaffa",
			temp: "40c",
		},
		{
			city: "afula",
			temp: "30c",
		},
	]);
});

app.listen(3000, () => {
	console.log("server start on 3000");
});
