const http = require("http");
const fs = require("fs");
const data = require("./users.json");

const host = "localhost";
const port = 8000;
const index = fs.readFileSync("index.html").toString();

const requestListener = function (req, res) {
	res.setHeader("Content-Type", "text/html");
	switch (req.url) {
		case "/":
			res.writeHead(200);
			var html = fs.readFileSync("./index.html");
			res.write(html);
			res.end();
			break;
		case "/raw-html":
			res.writeHead(200);

			res.end("<h1>Welcome</h1>");
			break;
		case "/index.css":
			fs.readFile("index.css", function (err, data) {
				res.writeHead(200, { "Content-Type": "text/css" });
				res.write(data);
				res.end();
			});
			break;
		case "/users":
			res.writeHead(200);
			res.write(JSON.stringify(data));
			res.end();
			break;
	}
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
	console.log(`Server is running on http://${host}:${port}`);
});
