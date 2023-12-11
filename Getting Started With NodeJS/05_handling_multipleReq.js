// Handling Multiple Requests using Node JS

const http = require('http'); // import http Library module

// create server
const server = http.createServer((req, res) => {
    // request url
    console.log(req.url);
    res.write('This is my application. ')
    if (req.url == "/product") {
        return res.end('This is product page');
    } else if (req.url == "/user") {
        return res.end('This is User Page');
    }
    // response end
    res.end("Welcome to My First Server!!!");
})

// specify a port to listen client's request
server.listen(3000, () => {
    console.log("Port 3000");
});