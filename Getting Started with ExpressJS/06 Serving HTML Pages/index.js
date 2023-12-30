const express = require('express');

const server = express();

server.get("/", (req, res) => {
    res.send("Welcome to Express")
})

// my static files are in public folder which can be accessed directly
server.use(express.static('public'));

server.listen(3000, () => {
    console.log("Server is listening at 3000");
})