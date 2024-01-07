import { blogs } from "../models/blog.model.js";

export const renderBlogs = (req, res) => {
  res.status(200).render("blogs", { blogs });
};
export const renderBlogForm = (req, res) => {
  res.status(200).render("addBlogForm");
};
export const addBlog = (req, res) => {
  blogs.push(req.body);
  res.status(201).render("blogs", { blogs });
};
