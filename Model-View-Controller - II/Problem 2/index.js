import express, { urlencoded } from "express";
import path from "path";
import { addBlog, renderBlogForm, renderBlogs } from "./src/controllers/blog.controller.js";
import expressEjsLayouts from "express-ejs-layouts";

const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));
app.use(expressEjsLayouts);
app.use(urlencoded({ extended: true }));

app.get("/", renderBlogs);
app.get("/createblog", renderBlogForm);
app.post("/addblog", addBlog);


export default app;