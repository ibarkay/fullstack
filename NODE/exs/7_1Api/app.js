const axios = require("axios");
const url = "https://dog.ceo/api/breeds/image/random";
const fetch = require("node-fetch");
const https = require("https");

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

httpsFetch();
