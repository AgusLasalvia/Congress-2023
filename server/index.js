// ---------------IMPORTS--------------//
// MongoDB Schemas
const preRegister = require("./Models/pre-register");
const Register = require("./Models/registration");
const Abstract = require("./Models/abstracts");
const mongoose = require("mongoose");


// Google API required modules
const { google } = require("googleapis");
const nodemailer = require("nodemailer");
const stream = require("stream");

// Express modules
const fileUpload = require("express-fileupload"); // Express file upload
const bodyParse = require("body-parser"); // Express file parser for parsing JSON
const express = require("express"); 
const cors = require("cors");
const port = process.env.PORT || 5000;
const app = express();


// --------------CONFIGURATIONS -------------- //

// Google Authentication credentials init
const auth = new google.auth.GoogleAuth({
  keyFile: "./credential.json", // Key file with credentials
  scopes: ["https://www.googleapis.com/auth/drive"], // Google Drive API url
});

// Read .env from railway
require("dotenv").config();

// Email configuration
const mail = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,  // Default Gmail SMTP  port
  secure: true,
  auth: {
    user: "aguslblumenfeld@gmail.com", // Sender email
    pass: "lnfzwfsumfidaxjd", // Password created from gmail for apps
  },
});

// Mongoose configuration
mongoose.connect(process.env.MONGODB); // MongoDB connection String
db = mongoose.connection.once("open", () => {
  console.log("Mongodb connected"); // Connnection verification message
});

// Express conficurations
app.use(express.urlencoded({ extended: true }));
app.use(bodyParse.json());
app.use(cors());
app.use(fileUpload());


// ---------------GLOBAL METHODS--------------- //

// Email send method
function SendMail(receiver, message, subject) {
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

// Google Drive API configuration
const uploadFile = async (fileObject, parentFolder) => {
  const bufferStream = new stream.PassThrough();
  bufferStream.end(fileObject["data"]);
  const { data } = await google
    .drive({
      version: "v3",
      auth: auth,
    })
    .files.create({
      media: {
        mimeType: fileObject["mimetype"],
        body: bufferStream,
      },
      requestBody: {
        name: fileObject["name"],
        parents: [parentFolder],
      },
    });
};


// ----------------ROUTES----------------- //

// Home redirection Route
app.get("/", (req, res) => {
  res.redirect("https://quitel23.site/Quitel/");
});

app.post("/pre-registration", (req, res) => {
  const data = req.body.preRegistration;
  console.log(data);
  let postData = new preRegister(data);
  preRegister
    .findOne({
      email: data["email"],
    })
    .then((result) => {
      if (result == null) {

        // Save data on MongoDB
        postData.save();

        // Send confirmation mail
        SendMail(
          data,
          "Pre registration to QUITEL 2023 Montevideo-Uruguay completed successfully",
          "QUITEL 2023 Pre Registration"
        );
        res.json("success");
      } else {
        res.json("already-pre-registered");
      }
    });
});

// Registration Data Form Receiver
app.post("/registration-data", (req, res) => {
  const data = req.body.registration;
  console.log(data);
  let postData = new Register(data);
  // MongoDB successfull
  postData.save();
  
  // Send mailOptions
  SendMail(
    data,
    "Registration to QUITEL 2023 Montevideo-Uruguay completed successfully",
    "QUITEL 2023 Registration"
  );
  res.json("success"); // Response to Frontend
});

app.post("/registration-files", async (req, res) => {
  const files = req.files; // Get all files from incoming Form
  console.log(files);

  // Check existing files, if exists, save it on Google Drive
  if (files.registration != (undefined || null)) {
    await uploadFile(files.registration, process.env.REGISTRATION_FOLDER_ID);
  }
  if (files.dinner != (undefined || null)) {
    await uploadFile(files.dinner, process.env.DINNER_FOLDER_ID);
  }
  if (files.accompanying != (undefined || null)) {
    await uploadFile(files.accompanying, process.env.ACCOMPANYING_FOLDER_ID);
  }
  res.json("submitted-successfully");
});

// Abstract Data Form Submition
app.post("/submit-abstract-data", (req, res) => {
  const body = req.body.abstract; // Get incoming Form Data
  let postData = new Abstract(body); // Declare a new model with Form data
  console.log(body);

  // MongoDB save
  postData.save();

  // Response to Front End
  res.json("data-validated");

  // Send mailOptions
  SendMail(
    body,
    "Abstract sent successfully, you will be notified if it has been approved,\n\
      otherwise you will be asked for modifications",
    "QUITEL 2023 Abstract Submition"
  );
});

// Abstract Files Form Submition
app.post("/submit-abstract-files", async (req, res) => {

  // If there is any file in the incoming form
  // Save it in the Google Drive folder
  const { files } = req;
  console.log(files);
  if (files.editableFormat != (undefined || null)) {
    await uploadFile(files.editableFormat, process.env.ABSTRACT_FOLDER_ID);
  }
  if (files.pdfFormat != (undefined || null)) {
    await uploadFile(files.pdfFormat, process.env.ABSTRACT_FOLDER_ID);
  }
  res.json("submitted-successfully"); // Response to frontend request
});

// Server start and listend in the port given by Railway Host
app.listen(port, () => console.info(`server started correctly`));
