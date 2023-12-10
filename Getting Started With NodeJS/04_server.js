// create a server using NodeJS

// 1. Import http Library Module
const http = require('http');

// 2. create server
const server = http.createServer((req, res) => {
    // Here comes the request
    res.end('Welcome to NodeJS server');
});

// 3. Specify a port number to listen to clients requests
server.listen(3100, () => {
    console.log("Server is listening on port 3100");
});