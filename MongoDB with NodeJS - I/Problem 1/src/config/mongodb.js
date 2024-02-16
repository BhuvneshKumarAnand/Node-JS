// 1. Import MongoDB Client
import { MongoClient } from "mongodb";
// 2. Function to connect to the database
let client;
const url = "mongodb://localhost:27017/confession";
export const connectToMongoDB = () => {
    MongoClient.connect(url)
        .then(clientInstance => {
            client = clientInstance;
            console.log("MongoDB is connected");
        })
        .catch(err => {
            console.log(err);
        })
};

// 3. Function to access the database
export const getDB = () => {
    return client.db();
};