const jdb = require("./db.json");
const fs = require("fs");

const createMovie = (obj) => {
	jdb.push(obj);
	fs.writeFileSync("./db.json", JSON.stringify(jdb));
};

const getMovie = (requast) => {
	const movie = jdb.find((movie) => movie.title === requast);
	if (movie) {
		return movie;
	} else {
		throw new Error("cant find this onc!");
	}
};

const editMovie = (reqy, reqBody) => {
	const movie = jdb.find((movie) => movie.title === reqy);
	if (movie) {
		const filtteredJbd = jdb.filter((movie) => movie.title !== reqy);
		filtteredJbd.push(reqBody);
		fs.writeFileSync("./db.json", JSON.stringify(filtteredJbd));
	} else {
		throw new Error("cant find it !");
	}
};

const deleteMovie = (reqy, reqBody) => {
	const movie = jdb.find((movie) => movie.title === reqy);
	const filtteredJbd = jdb.filter((movie) => movie.title !== reqy);
	if (filtteredJbd.length === jdb.length) {
		throw new Error("not deleted");
	} else {
		fs.writeFileSync("./db.json", JSON.stringify(filtteredJbd));
	}
};
module.exports = { createMovie, editMovie, deleteMovie, getMovie };
