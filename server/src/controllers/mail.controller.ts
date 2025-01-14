import { createTransport } from "nodemailer";

// Email configuration
const mail = createTransport({
    host: "smtp.gmail.com",
    port: 465,  // Default Gmail SMTP  port
    secure: true,
    auth: {
        user: "aguslblumenfeld@gmail.com", // Sender email
        pass: "fzvzahhtgfcbtbyz", // Password created from gmail for apps
    },
});


// Email send method
export const sendMail = (receiver: any, message: string, subject: string): void => {
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
        } else {
            console.log("Email sent successfully to: " + receiver["email"]);
        }
    });
}