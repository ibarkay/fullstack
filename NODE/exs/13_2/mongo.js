const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "blog";

const user1id = new ObjectID();
const user2id = new ObjectID();
const post1id = new ObjectID();
const post2id = new ObjectID();
const commnt1id = new ObjectID();

MongoClient.connect(
	connectionURL,
	{ useNewUrlParser: true },
	(error, client) => {
		if (error) {
			console.log("unable to connect");
		}
		const db = client.db(databaseName);
		// -----monog code gose here------
		db.collection("users")
			.insertMany([
				{
					_id: user1id,
					name: "iftach",
					posts: [post1id],
					comments: [commnt1id],
				},
				{ _id: user2id, name: "gali", posts: [post2id] },
			])
			.then((res) => {
				console.log(res);
			})
			.catch((e) => {
				console.log(e);
			});

		db.collection("posts")
			.insertMany([
				{
					_id: post1id,
					title: "this is a test",
					text: "many manymany text here",
					comments: [commnt1id],
					author: user1id,
				},
				{
					_id: post2id,
					title: "test2",
					text: "mansydsdhasdbjhbdhabdhjabjhbsd here",
					author: user2id,
				},
			])
			.then((res) => {
				console.log(res);
			})
			.catch((error) => {
				console.log(error);
			});

		db.collection("comments")
			.insertOne({
				_id: commnt1id,
				title: "wow",
				text: "yeah man",
				post: post1id,
				author: user1id,
			})
			.then((res) => {
				console.log(res);
			})
			.catch((e) => {
				console.log(e);
			});

		//-------------------------------
	}
);
