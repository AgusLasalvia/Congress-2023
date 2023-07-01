// MongoDB Schemas
const preRegister = require("./Models/pre-register");
const Register = require("./Models/registration");
const Abstract = require("./Models/abstracts");
const mongoose = require("mongoose");

// Google API required modules
const authentication = require("./js/google-sheet");
const { google } = require("googleapis");
const nodemailer = require("nodemailer");
const stream = require("stream");

//Google Authentication init
const auth = new google.auth.GoogleAuth({
    //Keyfile are the credentials given by Google Developer site
    keyFile: "",
    scopes: ["https://www.googleapis.com/auth/drive"],
});

// Express modules
const fileUpload = require("express-fileupload");
const bodyParse = require("body-parser");
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// Read .env
require("dotenv").config();

// Email configuration
const mail = nodemailer.createTransport({
  host: "smtp.gmail.com",
  //default port for send mail via Gmail
  port: 465,
  secure: true,
  auth: {
    //Email user
    user: "",
    //Password generated for apps
    pass: "",
  },
});

// Mongoose configuration
mongoose.connect(process.env.MONGODB);
db = mongoose.connection.once("open", () => {
  console.log("Mongodb connected");
});

// Express conficurations
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParse.json());
app.use(cors());
app.use(fileUpload());

// Home redirection Route
app.get("/", (req, res) => {
  res.redirect("https://quitel23.site/");
});

// Routes POST
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
          "Pre registration to QUITEL 2023 completed successfully",
          "QUITEL 2023 Pre Registration"
        );
        res.json("success");
      } else {
        //Response to Frontend if username already exist in DB
        res.json("already-pre-registered");
      }
    });
});

// Registration Data Form Receiver
app.post("/registration-data", (req, res) => {
  const data = req.body.registration;
  console.log(data)
  let postData = new Register(data);
  Register.findOne({
    email: data["email"],
  }).then((result) => {
    if (result == null) {
      // MongoDB successfull
      postData.save();

      // Send mailOptions
      SendMail(
        data,
        "Registration to QUITEL 2023 completed successfully",
        "QUITEL 2023 Registration"
      );

      res.json("success");
    } else {
      res.json("already-registered");
    }
  });
});

app.post("/registration-files", async (req, res) => {
  const files = req.files;
  console.log(files)
  if (files.registration != (undefined || null)) {
    await uploadFile(files.registration, process.env.REGISTRATION_FOLDER_ID);
  }
  if (files.dinner != (undefined || null)) {
    await uploadFile(files.dinner, process.env.DINNER_FOLDER_ID);
  }
  if (files.accompanying != (undefined || null)) {
    await uploadFile(files.accompanying, process.env.ACCOMPANYING_FOLDER_ID);
  }
  res.json('submitted-successfully');
});

// Abstract Data Form Submition
app.post("/submit-abstract-data", (req, res) => {
  const body = req.body.abstract;
  let postData = new Abstract(body);
  console.log(body);
  Abstract.findOne({
    email: body["email"],
  }).then((result) => {
    if (result == null) {
      postData.save();
      res.json("data-validated");
      SendMail(
        body,
        "Abstract sent successfully, you will be notified if it has been approved,\n\
      otherwise you will be asked for modifications",'QUITEL 2023 Abstract Submition'
      );
    } else {
      res.json("already-submitted");
    }
  });
});

// Abstract Files Form Submition
app.post("/submit-abstract-files", async (req, res) => {
  const { files } = req;
  // Check for existing files
  // In case it exists, save it on a google drive folder
  console.log(files);
  if (files.editableFormat != (undefined || null)) {
    await uploadFile(files.editableFormat, process.env.ABSTRACT_FOLDER_ID);
  }
  if (files.pdfFormat != (undefined || null)) {
    await uploadFile(files.pdfFormat, process.env.ABSTRACT_FOLDER_ID);
  }
  //Response to Frontend
  res.json("submitted-successfully");
});

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
      console.log("Email sent successfully: " + info.response);
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

app.listen(port, () => console.info(`server started correctly`));
