// Please don't change the pre-written code
// Import the necessary modules here
import mongoose from 'mongoose';

export const connectUsingMongoose = async() => {
    // write your code here
    try {
        await mongoose.connect('mongodb://localhost:27017/library', {
            useNewParser: true,
            useUnifiedTopology: true
        })
        console.log("MongoDB connected using Mongoose");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
    }
};