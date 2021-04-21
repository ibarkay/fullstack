const express = require("express");
console.log(`--------\n0fi7 is my L0v3!\n--------`);

require("./src/db/mongoose");
const Product = require("./src/modles/Product");

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;
// Create Product-------------------------
app.post("/products", async (req, res) => {
	const product = await new Product(req.body);
	await product
		.save()
		.then((product) => {
			res.status(201).send(product);
		})
		.catch((e) => {
			res.status(400).send(e.message);
		});
	res.send("creating product");
});
// Get all products-----------------
app.get("/products", (req, res) => {
	Product.find({})
		.then((products) => {
			res.status(200).send(products);
		})
		.catch((e) => {
			res.status(400).send("cant fatch");
		});
});
//  Get a specific product--------------
app.get("/products/search/:id", (req, res) => {
	Product.findById(req.params.id)
		.then((product) => {
			res.status(200).send(product);
		})
		.catch((e) => {
			res.status(400).send("unable to get product");
		});
});

// Get products that are active
app.get("/products/active", (req, res) => {
	Product.find({ isActive: true })
		.then((activez) => {
			res.status(200).send(activez);
		})
		.catch((e) => {
			res.status(400).send("unable to get actives");
		});
});

// Get products with a specific price range
app.get("/products/minmax/:min/:max", (req, res) => {
	Product.find({
		price: { $lt: parseInt(req.params.max), $gt: parseInt(req.params.min) },
	})
		.then((results) => {
			res.status(200).send(results);
		})
		.catch((e) => {
			res
				.status(400)
				.send("unable to find in range", req.params.min, req.params.max);
		});
});

// Update product active (toggle)
app.put("/products/toggle-active/:id", (req, res) => {
	Product.findById(req.params.id)
		.then((product) => {
			console.log(product.isActive);
			product.isActive = !product.isActive;
			product.save();
			res.status(200).send(product);
		})
		.catch((e) => {
			res.status(400).res.send(e.message);
		});
});
// Update product discount
app.put("/products/discount/:id/:amount", (req, res) => {
	Product.findById(req.params.id)
		.then((product) => {
			product.details.discount += parseInt(req.params.amount);
			product.save();
			res.status(200).send(product);
		})
		.catch((e) => {
			res.status(400).res.send(e.message);
		});
});

//Delete all
app.delete("/products", (req, res) => {
	Product.deleteMany({})
		.then((msg) => {
			res.status(200).send("all was deleted ! thanx to 0fi7.");
		})
		.catch((e) => {
			res.status(200).send(e.message);
		});
});
//Delete Spesiphic Product
app.delete("/products/:id", (req, res) => {
	Product.findOneAndDelete(req.params.id)
		.then((product) => {
			res.status(205).send(`${product} was deleted.`);
		})
		.catch((e) => {
			res.status(400).send(e.message);
		});
});

// Listen----------------------------
app.listen(port, () => {
	console.log("running " + port);
});
