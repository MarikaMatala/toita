const { MongoClient } = require('mongodb');

async function main() {

    const uri = "mongodb+srv://AA4495:Mursut4444@cluster0.w4tsmbv.mongodb.net/?retryWrites=true&w=majority"
    const client = new MongoClient(uri);

    try {
        await client.connect();
        
        /*process.argv.forEach((val, index) => {
            console.log(`${index}: ${val}`);
          });*/
        var args = process.argv.slice(2);
        /*console.log(args)*/
        console.log("Added new name: " + args[0])
        await createName(client, {
            name: args[0]
        })
    }
    catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

async function createName(client, newListing) {
    const result = await client.db("database1").collection("collection1").insertOne(newListing);

    console.log('New listing created with ID: ' + result.insertedId)
}
