// Please do not change the prewritten code

import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
    //  Write your code here
    if (req.method == "POST") {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk.toString();
        });

        req.on("end", () => {
            fs.appendFile("data.txt", body + "\n", (err) => {
                if (err) {
                    console.log(err);
                    req.end("Internal server error");
                } else {
                    // console.log("Data appended to file: " + body);

                    //Read the content of the file and send it as an response
                    fs.readFile("data.txt", "utf-8", (err, data) => {
                        if (err) {
                            console.log(err);
                            req.end("Internal server error");
                        } else {
                            // console.log("File Contents: ", data);
                            console.log(data);
                            res.end(data);
                        }
                    })
                }
            });
        })
    }
    res.end("data received");
});

export default server;

/*
// Please do not change the prewritten code

import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
    //  Write your code here
    if (req.method == "POST") {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk.toString();
        });

        req.on("end", () => {
            fs.appendFileSync("data.txt", body)
            const read = fs.readFileSync("data.txt", "utf-8")
            console.log(read);
        })
    }
    res.end("data received");
});

export default server;
*/