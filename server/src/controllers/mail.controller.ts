import { createTransport } from "nodemailer";

// Email configuration
const mail = createTransport({
    host: "smtp.gmail.com",
    port: 465,  // Default Gmail SMTP  port
    secure: true,
    auth: {
        user: "your_mail", // Sender email
        pass: "your_secret(previous already deleted)", // Password created from gmail for apps
    },
});


// Email send method
export const sendMail = (receiver: any, message: string, subject: string): void => {
    // Mail individual options
    let mailOptions = {
        from: "sender",
        to: receiver["email"], // receiver
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
