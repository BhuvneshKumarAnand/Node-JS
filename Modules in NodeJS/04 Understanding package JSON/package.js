const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Welcome to NodeJS')
});

server.listen(1000, () => {
    console.log("Port 1000");
});