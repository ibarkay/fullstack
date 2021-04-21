const mongoose = require("mongoose");
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
			required: false,
			minlength: 10,
		},
		price: {
			type: Number,
			required: false,
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

		phoneNumber: {
			type: String,
			required: false,
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

module.exports = Product;
