import { MongoClient } from "mongodb";

const connectionString = 'mongodb+srv://matthewmthibault:NVbGHyuAW1plCDQz@cs628matthew.2twcb.mongodb.net/?retryWrites=true&w=majority&appName=CS628Matthew' //process.env.ATLAS_URI || "";

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

let db = conn.db("pe05");

export default db;