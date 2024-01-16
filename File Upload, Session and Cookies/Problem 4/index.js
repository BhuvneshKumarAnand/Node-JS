// Please don't change the pre-written code
// Import the necessary modules here

import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser";
import {
    handleGame,
    handleLogin,
    handlePost,
    handleSignUp,
    renderLogin,
    renderSignUp,
} from "./user.controller.js";
import { auth } from "./middleware/auth.js";
import { generateRandomNumber } from "./middleware/generateRandomNumber.js";


const app = express();

// Implement the necessary Express Session here
app.use(
    session({
        secret: "your-secret-key", // Change this to a strong, random string
        resave: false,
        saveUninitialized: true,
    })
);

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", auth, generateRandomNumber, handleGame);
app.post("/guess", handlePost);

app.get("/login", renderLogin);
app.get("/signup", renderSignUp);

app.post("/login", handleLogin);
app.post("/signup", handleSignUp);

export default app;