const { MongoClient } = require("mongodb");
const password = process.env.MONGODBPWORD;
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = `mongodb+srv://Hannah:${password}@cluster0.qqcao.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(url);

async function run() {
    try {
        await client.connect();
        console.log("Connected correctly to server");

    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}

run().catch(console.dir);