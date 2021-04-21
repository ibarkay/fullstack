const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/productz", {
	useNewUrlParser: true,
	useCreateIndex: true,
});


