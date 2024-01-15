"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMail = void 0;
const nodemailer_1 = require("nodemailer");
// Email configuration
const mail = (0, nodemailer_1.createTransport)({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "aguslblumenfeld@gmail.com",
        pass: "fzvzahhtgfcbtbyz", // Password created from gmail for apps
    },
});
// Email send method
const sendMail = (receiver, message, subject) => {
    // Mail individual options
    let mailOptions = {
        from: "aguslblumenfeld@gmail.com",
        to: receiver["email"],
        subject: subject,
        text: `${receiver["firstName"]} ${receiver["lastName"]} : \n ${message}`,
    };
    mail.sendMail(mailOptions, function (err, info) {
        if (err) {
            console.log(err);
        }
        else {
            console.log("Email sent successfully to: " + receiver["email"]);
        }
    });
};
exports.sendMail = sendMail;
