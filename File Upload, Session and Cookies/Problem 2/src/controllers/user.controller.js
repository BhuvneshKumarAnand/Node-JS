// Please don't change the pre-written code
// Import the necessary modules here
import { registerUser, users, authenticateUser } from "../models/user.model.js";

export default class UserController {
    getRegister = (req, res, next) => {
        // Write your code here
        res.render("user-register");
    };
    getLogin = (req, res, next) => {
        // Write your code here
        res.render("user-login");
    };
    addUser = (req, res) => {
        // Write your code here
        const { name, email, password } = req.body;
        const newUser = { id: users.length + 1, name, email, password };

        registerUser(newUser);
        res.render("user-login");
    };
    loginUser = (req, res) => {
        // Write your code here
        const { email, password } = req.body;
        const result = authenticateUser({ email, password });

        if (result.success) {
            res.json({ success: true, message: "Login successful" });
        } else {
            res.json({ success: false, message: "Login failed" });
        }
    };
}