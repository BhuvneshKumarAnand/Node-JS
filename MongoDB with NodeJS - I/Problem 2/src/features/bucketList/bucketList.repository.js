// Please don't change the pre-written code
// Import the necessary modules here

import { getDB } from "../../config/mongodb.js";
import BucketListModel from "./bucketList.model.js";

class BucketListRepository {
    async addBucketListItem(bucketListItem) {
        // Write your code here
        const db = getDB();
        const newItem = new BucketListModel(
            bucketListItem.title,
            bucketListItem.description,
            bucketListItem.dateAdded,
            bucketListItem.targetDate,
            bucketListItem.isCompleted
        );
        await db.collection("bucketListItems").insertOne(newItem);
        return newItem;
    }

    async findOneBucketListItem(title) {
        // Write your code here
        const db = getDB();
        return await db.collection("bucketListItems").findOne({ title });
    }
}

export default BucketListRepository;