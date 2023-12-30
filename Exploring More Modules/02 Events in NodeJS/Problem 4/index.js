import http from "http";
import fs from "fs";
import EventEmitter from "events";
import nodemailer from "nodemailer";
// import { emit } from "process";

class CustomEvent extends EventEmitter {
    mailSent(email) {
        this.emit("mailSent", email);
    }
}

const customEvent = new CustomEvent();

const server = http.createServer((req, res) => {
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "codingninjas2k16@gmail.com",
            pass: "slwvvlczduktvhdj",
        },
    });

    if (req.method === "POST") {
        let data = "";

        req.on("data", (chunk) => {
            data += chunk;
        });

        req.on("end", () => {
            const { name, email, message } = JSON.parse(data);

            const queryString = `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n\n`;

            // TODO: Append user query in "queries.txt"

            fs.appendFileSync("queries.txt", queryString);

            // Nodemailer mailOptions
            const mailOptions = {
                from: "codingninjas2k16@gmail.com",
                to: email,
                subject: "Query received",
                text: "We have received your query and will get back to you soon.",
            };

            // TODO: Use Nodemailer to send confirmation email
            // TODO: Emit "mailSent" event

            try {
                transporter.sendMail(mailOptions);
                customEvent.emit("mailSent", email)
            } catch (error) {
                console.log(error);
            }



            res.end("Query received");
        });
    } else {
        res.end("Welcome to Coding Ninjas!");
    }
});

const Solution = () => {
    customEvent.addListener("mailSent", (email) => {
        console.log("custom event 'mailSent' emitted");
        console.log(
            `confirming that the email has been sent successfully to ${email}`
        );
    });
};

export default server;
export { server, CustomEvent, Solution };