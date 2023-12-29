const http = require('http');

const server = http.createServer((req, res) => {
    res.write("This is coming from NodeJS server. ");
    if (req.url == "/first") {
        res.end("This is the first server. ");
    } else {
        res.end("This is a default server. ")
    }
});

server.listen(3200, () => {
    console.log("Listening at 3200");
});