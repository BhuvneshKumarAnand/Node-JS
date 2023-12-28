// npm i nodemailer

// 1. import nodemailer

const nodemailer = require('nodemailer');

// 2. configure email and send it

async function sendMail() {

    // 1. create an email transporter
    // 2. SMTP - simple mail transfer protocol
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "vikingprime874@gmail.com",
            pass: "guydohorfznwigve"
        }
    })

    // 3. configure email content
    const mailOptions = {
        from: "vikingprime874@gmail.com",
        to: "bharatanand874@gmail.com",
        subject: "Welcome to NodeJS App",
        text: "This is an email using nodemailer in NodeJS"
    }

    // 4. Send the email
    try {
        const result = await transporter.sendMail(mailOptions);
        console.log("Email sent successfully");
    } catch (error) {
        console.log("Email send failed with error: " + error);
    }
}

sendMail();