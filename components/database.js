import { MongoClient } from "mongodb"
export default async function database(callback){
    //Change the bellow url as your database configuration
    const client = new MongoClient('mongodb://localhost:27017')
    await client.connect()
    const db = client.db('<Put your db name>');
    return callback(client,db)
    
}