// import BucketListModel from "./bucketList.model.js";

// export default class BucketListController {
//   add = async (req, res) => {
//     const { title, description, dateAdded, targetDate, isCompleted } = req.body;
//     // Refactor to use the repository method
//     const item = await BucketListModel.addBucketListItem(
//       title,
//       description,
//       dateAdded,
//       targetDate,
//       isCompleted
//     );

//     res.status(201).send(item);
//   };

//   get = async (req, res) => {
//     const { title } = req.query;
//     // Refactor to use the repository method
//     const item = await BucketListModel.findOneBucketListItem(title);

//     if (!item) {
//       res.status(200).send("Item not found.");
//     } else {
//       res.status(200).send(item);
//     }
//   };
// }

// bucketList.controller.js
// import BucketListModel from "./bucketList.model.js";
import BucketListRepository from "./bucketList.repository.js";

export default class BucketListController {
    constructor() {
        this.bucketListRepository = new BucketListRepository();
    }

    add = async(req, res) => {
        const { title, description, dateAdded, targetDate, isCompleted } = req.body;
        try {
            const item = await this.bucketListRepository.addBucketListItem({
                title,
                description,
                dateAdded,
                targetDate,
                isCompleted
            });
            res.status(201).send(item);
        } catch (error) {
            console.error("Error adding bucket list item:", error);
            res.status(500).send("Internal Server Error");
        }
    };

    get = async(req, res) => {
        const { title } = req.query;
        try {
            const item = await this.bucketListRepository.findOneBucketListItem(title);
            if (!item) {
                res.status(404).send("Item not found.");
            } else {
                res.status(200).send(item);
            }
        } catch (error) {
            console.error("Error retrieving bucket list item:", error);
            res.status(500).send("Internal Server Error");
        }
    };
}