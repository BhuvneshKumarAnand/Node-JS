// Returning HTML as Response

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const data = fs.readFileSync('index.html').toString();
    res.end(data);
});

server.listen(3000);
console.log('3000 port is live');