// Created a server using NodeJS

/*
const http = require('http');

const server = http.createServer((req, res) => {
    res.end("Welcome to NodeJS")
});

const PORT = 3200;

server.listen(PORT, () => {
    console.log(`server is listening at http://localhost:${PORT}`);
});
*/

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


const express = require('express');


// Create Server

const server = express();

// Handle default request

server.get("/", (req, res) => {
    res.send("Welcome to ExpressJS")
})

// Listen on specified port

const PORT = 3200;

server.listen(PORT, () => {
    console.log(`server is listening at http://localhost:${PORT}`);
});