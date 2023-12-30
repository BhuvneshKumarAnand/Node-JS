// HTTP Headers

// 1. provides the metadata about the requests or response
// 2. set cookies to store user specific data
// 3. control catching behavior
// 4. communicate server specific information to the client


// Popular HTTP headers

// 1. Content-Type
// 2. Authorization
// 3. Accept Language
// 4. User-Agent

// HTTP response status quotes
// Read more about this on Mozilla


//___________________________________________________________________________________________

const express = require('express');

const server = express();

server.get("/", (req, res) => {
    res.set("Content-Type", "text/plain") // HTTP header
    res.send('This is a GET request...')
})

server.post("/", (req, res) => {
    res.status(201).send('This is a POST request...')
})

server.put("/", (req, res) => {
    res.send('This is a PUT request...')
})

server.listen(3000, () => {
    console.log("server is listening at 3000");
})