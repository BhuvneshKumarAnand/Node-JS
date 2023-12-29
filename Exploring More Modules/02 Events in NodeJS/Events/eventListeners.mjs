import { userEvents } from "./03userEvents.mjs";

const userEvent = new userEvents();


userEvent.addListener("postCreated")

function saveToDatabase() {
    console.log("Saving Post to database");
}

function sendNotification() {
    console.log("sending notifications");
}

function updateTimeline() {
    console.log('Updating Timeline');
}

userEvent.addListener("postCreated", saveToDatabase)
userEvent.addListener("postCreated", sendNotification)
userEvent.addListener("postCreated", updateTimeline)

userEvent.createPost("This is my first post");