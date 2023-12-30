// Types of Requests

// import express module
const express = require('express');

// create server
const server = express();

// post request
server.post("/", (req, res) => {
    res.send("Hello There! Welcome to express. This is a post request")
})

// put request
server.put("/", (req, res) => {
    res.send("Hello There! Welcome to express. This is a put request")
})

// delete request
server.delete("/", (req, res) => {
    res.send("Hello There! Welcome to express. This is a delete request")
})

// Get Request
server.get("/", (req, res) => {
    res.send("Hello There! Welcome to express. This is a get request")
})

const port = 3300;

server.listen(port, () => {
    console.log(`Server is listening at ${port}`);
});