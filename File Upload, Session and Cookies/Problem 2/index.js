// Please don't change the pre-written code
// Import the necessary modules here

import express, { urlencoded } from "express";
import path from "path";
import expressEjsLayouts from "express-ejs-layouts";
import UserController from "./src/controllers/user.controller.js";

const app = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));

app.use(expressEjsLayouts);
app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));

//create routes here

// Create an instance of the UserController
const userController = new UserController();

// Routes
app.get("/register", userController.getRegister);
app.post("/register", userController.addUser);
app.get("/login", userController.getLogin);
app.post("/login", userController.loginUser);

export default app;