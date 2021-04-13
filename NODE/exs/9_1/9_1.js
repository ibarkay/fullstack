// const http = require("http");
const express = require("express");
// const fs = require("fs");
const path = require("path");
const data = require("./users.json");
const hbs = require("hbs");
const app = express();

const host = "localhost";
const port = 8000;
const partPath = path.join(__dirname, "/temps");
const viewPath = path.join(__dirname, "/views");
const dir = path.join(__dirname);

app.set("view engine", "hbs");
app.set("views", viewPath);
hbs.registerPartials(partPath);

app.use(express.static(dir));

app.get("", (req, res) => {
	res.render("index");
});

app.get("/raw-html", (req, res) => {
	res.render("raw");
});

app.get("/users", (req, res) => {
	res.render("users", {
		datas: JSON.stringify(data),
	});
});

app.listen(3000, () => {
	console.log("server start on 3000");
});

// const requestListener = function (req, res) {
// 	res.setHeader("Content-Type", "text/html");
// 	switch (req.url) {
// 		case "/":
// 			res.writeHead(200);
// 			const html = fs.readFileSync("./index.html");
// 			res.write(html);
// 			res.end();
// 			break;
// 		case "/raw-html":
// 			res.writeHead(200);

// 			res.end("<h1>Welcome</h1>");
// 			break;
// 		case "/index.css":
// 			fs.readFile("index.css", function (err, data) {
// 				res.writeHead(200, { "Content-Type": "text/css" });
// 				res.write(data);
// 				res.end();
// 			});
// 			break;
// 		case "/users":
// 			res.writeHead(200);
// 			res.write(JSON.stringify(data));
// 			res.end();
// 			break;
// 	}
// };

// const server = http.createServer(requestListener);
// server.listen(port, host, () => {
// 	console.log(`Server is running on http://${host}:${port}`);
// });
