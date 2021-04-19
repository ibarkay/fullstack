const { MongoClient } = require("mongodb");
const uri = "mongodb://localhost:27017/";

async function main() {
	const client = new MongoClient(uri);

	try {
		// Connect to the MongoDB cluster
		await client.connect();

		// Make the appropriate DB calls
		await listDatabases(client);
		// await getAllItems(client);
	} catch (e) {
		console.error(e);
	} finally {
		await client.close();
	}
}
async function listDatabases(client) {
	databasesList = await client.db().admin().listDatabases();

	console.log("Databases:");
	databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
}
const getAllItems = async (client) => {
	items = await client.db().admin().listDatabases();
	console.log(items);
};

main().catch(console.error);

const client = new MongoClient(uri);
