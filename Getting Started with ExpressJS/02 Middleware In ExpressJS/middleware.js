const express = require('express');


// Create Server

const server = express();

// Handle default request

// 1st Middleware

server.get("/", (req, res, next) => {
    console.log("This is first Middleware");
    next();
});

//2nd middleware

server.get("/", (req, res) => {
    res.send("Welcome to ExpressJS")
})

// Listen on specified port

const PORT = 3200;

server.listen(PORT, () => {
    console.log(`server is listening at http://localhost:${PORT}`);
});