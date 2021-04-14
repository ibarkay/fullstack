const express = require("express");
const path = require("path");
const hbs = require("hbs");
const axios = require("axios");
const fetch = require("node-fetch");
const url = "https://dog.ceo/api/breeds/image/random";
const request = require("request");

const fetchAxious = async () => {
	const resp = await axios.get(url);
	return resp.data.message;
};

const requestFetch = () => {
	request(url, async function (error, response, body) {
		const dataJSON = await JSON.parse(response.body);
		const a = await dataJSON.message;
		let b = "";
		// console.log(a);
		const timey = await setTimeout(() => {
			return a;
		}, 1000);
		return await timey();
	});
};

const app = express();
const viewsPath = path.join(__dirname, "/");
app.set("view engine", "hbs"); //COOL!
app.set("views", viewsPath);
hbs.registerPartials(viewsPath);

app.get("", async (req, res) => {
	res.render("index", {
		title: "im from axios",
		responed: await fetchAxious(),
	});
});
app.get("/fetch", async (req, res) => {
	res.render("req", {
		title: "im from fetch",
		responed2: await requestFetch(),
	});
});

app.listen(3000, () => {
	console.log("Server running on http://localhost:3000");
});
