const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/product", {
	useNewUrlParser: true,
	useCreateIndex: true,
});

const Product = mongoose.model("Product", {
	name: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		required: true,
	},
	isActive: {
		type: Boolean,
	},
	details: {
		description: {
			type: String,
			required: true,
			minlength: 10,
		},
		price: {
			type: Number,
			required: true,
			validate(value) {
				if (value < 0) {
					throw new Error("number i smaller then zero");
				}
			},
		},
		discount: {
			type: Number,
			required: false,
			default: 0,
		},
		imgz: {
			type: Array,
			minlength: 2,
		},
		phoneNumber: {
			type: String,
			required: true,
			validate(value) {
				if (!validator.isMobilePhone(value, "he-IL")) {
					throw new Error("not valide number");
				}
			},
		},
		dateAdded: {
			type: Date,
			default: new Date(),
		},
	},
});
// -------------1----------
const xbox = new Product({
	name: "Xbox",
	category: "videogames",
	isActive: true,
	details: {
		description: "xbox X - best game console ever",
		price: 1000,
		imgz: [2, 2, 2],
		phoneNumber: "0556661501",
	},
});

xbox
	.save()
	.then((xbox) => {
		console.log(xbox);
	})
	.catch((e) => {
		console.log(e);
	});

// ------------2-----------
const pc = new Product({
	name: "personal computer",
	category: "electronics",
	isActive: true,
	details: {
		description: "presonal computer",
		price: 5000,
		phoneNumber: "0556661501",
	},
});

pc.save()
	.then((pc) => {
		console.log(pc);
	})
	.catch((e) => {
		console.log(e);
	});
// --------------3---------
const fan = new Product({
	name: "fan",
	category: "Electronics",
	isActive: true,
	details: {
		description: "fan X  dnsakdnaslkndaskldnslka",
		price: 10,
		phoneNumber: "0524374227",
	},
});

fan
	.save()
	.then((fan) => {
		console.log(fan);
	})
	.catch((e) => {
		console.log(e);
	});
