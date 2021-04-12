const axios = require("axios");
const url = "https://dog.ceo/api/breeds/image/random";
const fetch = require("node-fetch");
const https = require("https");
const request = require("request");

const fetchAxious = async () => {
	const resp = await axios.get(url);
	console.log(resp.data);
};

// fetchAxious();

const fetchFetch = async () => {
	const resp = await fetch(url);
	console.log(resp);
};

// fetchFetch();

const httpsFetch = () => {
	const resp = https.get(url);
	console.log(resp);
};

// httpsFetch();

const requestFetch = () => {
	request(url, function (error, response, body) {
		console.error("error:", error); // Print the error if one occurred
		console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
		console.log("body:", body); // Print the HTML for the Google homepage.
	});
};

requestFetch();
