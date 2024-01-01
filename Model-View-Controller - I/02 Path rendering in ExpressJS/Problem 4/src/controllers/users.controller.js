// Please don't change the pre-written code
// Import the necessary modules here
import { userModel } from "../models/users.model.js";

export const userController = async(req, res) => {
    try {
        const userData = await userModel();
        // Write your code here 
        // Render the 'index.ejs' file with user data
        res.render('index', { users: userData });
    } catch (error) {
        res.send(error);
    }
};