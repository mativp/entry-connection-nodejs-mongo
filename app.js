const { MongoClient } = require("mongodb");

const uri = "mongodb://root:example@localhost:27017";

async function run() {
    try {
        var client = new MongoClient(uri);
        await client.connect();
        await listDatabases(client);

    } finally {
        await client.close();
    }
}

run().catch(console.dir);


async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(`\t - ${db.name}`));
};
