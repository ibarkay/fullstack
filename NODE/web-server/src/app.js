const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

// Define path for express config
const publicDir = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// setup handelbars engige and views loctions
app.set("view engine", "hbs"); //COOL!
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// setup static dir to serve
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
	res.render("help", {
		title: "help",
		helpText: "give you help",
		name: "iftach",
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

app.get("/help/*", (req, res) => {
	res.render("404", {
		title: "404 help",
		name: "iftach",
		errMsg: "help aretc not found",
	});
});

app.get("*", (req, res) => {
	res.render("404", {
		title: "error",
		name: "iftach",
		errMsg: "page not found",
	});
});

app.listen(3000, () => {
	console.log("server start on 3000");
});
