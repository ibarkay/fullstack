var http = require("https");

const req = http.get("https://dog.ceo/api/breeds/image/random", (resp) => {
	console.log(resp);
});


