// Please don't change the pre-written code

const express = require("express");
const server = express();

// Write your code here

// 2.Handle GET requests by responding with the message 'get'.
server.get("/", (req, res) => {
    res.send(`get`)
})

// 3.Handle POST requests by responding with the message 'post'.
server.post("/", (req, res) => {
    res.send(`post`)
})

// 4.Handle PUT requests by responding with the message 'put'.
server.put("/", (req, res) => {
    res.send(`put`)
})

// 5.Handle DELETE requests by responding with the message 'delete'.
server.delete("/", (req, res) => {
    res.send(`delete`)
})


module.exports = server;