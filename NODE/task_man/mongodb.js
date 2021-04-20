// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;
const { MongoClient, ObjectID } = require("mongodb");
// -------------------------------------

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manger";


// const id = new ObjectID();
// console.log(id);
// console.log(id.getTimestamp());

MongoClient.connect(
	connectionURL,
	{ useNewUrlParser: true },
	(error, client) => {
		if (error) {
			return console.log("unable to connect to database");
		}
		const db = client.db(databaseName);

		db.collection("users")
			.updateMany({ name: "iftach" }, { $set: { name: "IFTACH" } })
			.then((result) => {
				console.log(result);
			})
			.catch((error) => {
				console.log(error);
			});

		// db.collection("users")
		// 	.updateOne(
		// 		{
		// 			_id: new ObjectID("607d585a831fc6516884ec47"),
		// 		},
		// 		{
		// 			$inc: {
		// 				age: 1,
		// 			},
		// 		}
		// 	)
		// 	.then((result) => {
		// 		console.log(result);
		// 	})
		// 	.catch((error) => {
		// 		console.log(error);
		// 	});

		// db.collection("users").findOne(
		// 	{ _id: ObjectID("607d585a831fc6516884ec47") },
		// 	(error, user) => {
		// 		if (error) {
		// 			return console.log("unable to fetch");
		// 		}
		// 		console.log(user);
		// 	}
		// );
		// db.collection("users")
		// 	.find({ age: 36 })
		// 	.toArray((error, users) => {
		// 		console.log(users);
		// 	});

		// db.collection("tasks").findOne(
		// 	{ _id: ObjectID("607d5b7b47aba55ad002fef7") },
		// 	(error, user) => {
		// 		if (error) {
		// 			console.log("cant find user");
		// 		}
		// 		console.log(user);
		// 	}
		// );
	}
);
