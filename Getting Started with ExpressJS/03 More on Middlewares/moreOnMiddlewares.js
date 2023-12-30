const express = require('express');


// Create Server

const server = express();

// Handle default request

// 1st Middleware
function firstMiddleware(req, res, next) {
    console.log("First Middleware");
    next();
}
//2nd middleware
function secondMiddleware(req, res, next) {
    console.log("Second Middleware");
    next();
}

//global Middleware
function globalMiddleware(req, res, next) {
    console.log("Global Middleware");
    next();
}

// use of global Middleware
// this is going to be executed for all requests
server.use(globalMiddleware)

// Method 1
server.get("/send", [firstMiddleware, secondMiddleware], (req, res) => {
    res.send("Welcome to ExpressJS")
})

// Listen on specified port

const PORT = 3200;

server.listen(PORT, () => {
    console.log(`server is listening at http://localhost:${PORT}`);
});