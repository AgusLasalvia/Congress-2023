// MongoDB Schemas
const preRegister = require("./Models/pre-register");
const Register = require("./Models/registration");
const Abstract = require("./Models/abstracts");
const mongoose = require("mongoose");

// MercadoPago Checkout Pro API
const mercadopago = require("mercadopago");
mercadopago.configure({
  access_token: process.env.MERCADOPAGO_TOCKEN //Access tocken to the API
});

// Google API required modules
const { google } = require("googleapis");
const nodemailer = require("nodemailer");
const stream = require("stream");


// Google Authentication credentials init
const auth = new google.auth.GoogleAuth({
  keyFile: "./credential.json",
  scopes: ["https://www.googleapis.com/auth/drive"],
});

// Express modules
const fileUpload = require("express-fileupload");
const bodyParse = require("body-parser");
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// Read .env from railway
require("dotenv").config();

// Email configuration
const mail = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,  // Default Gmail smtp port
  secure: true,
  auth: {
    user: "aguslblumenfeld@gmail.com", 
    pass: "lnfzwfsumfidaxjd", // Password created from gmail for apps
  },
});

// Mongoose configuration
mongoose.connect(process.env.MONGODB); // MongoDB connection String
db = mongoose.connection.once("open", () => {
  console.log("Mongodb connected"); // Connnection verification message
});

// Express conficurations
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParse.json());
app.use(cors());
app.use(fileUpload());

// Home redirection Route
app.get("/", (req, res) => {
  res.redirect("https://quitel23.site/Quitel/");
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
  Register.findOne({
    email: data["email"], // Search for existing email on MongoDB
  }).then((result) => {
    if (result == null) {

      // MongoDB successfull
      postData.save();

      // Send mailOptions
      SendMail(
        data,
        "Registration to QUITEL 2023 Montevideo-Uruguay completed successfully",
        "QUITEL 2023 Registration"
      );

      res.json("success"); // Response to Frontend
    } else {
      res.json("already-registered"); // Response to Frontend
    }
  });
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
  Abstract.findOne({
    email: body["email"], // Search for an existing email in MongoDB
  }).then((result) => {
    if (result == null) {
      postData.save();
      res.json("data-validated");
      SendMail(
        body,
        "Abstract sent successfully, you will be notified if it has been approved,\n\
      otherwise you will be asked for modifications",
        "QUITEL 2023 Abstract Submition"
      );
    } else {
      res.json("already-submitted");
    } 
  });
});

// Abstract Files Form Submition
app.post("/submit-abstract-files", async (req, res) => {
  // All same as registraiton-files
  const { files } = req;
  console.log(files);
  if (files.editableFormat != (undefined || null)) {
    await uploadFile(files.editableFormat, process.env.ABSTRACT_FOLDER_ID);
  }
  if (files.pdfFormat != (undefined || null)) {
    await uploadFile(files.pdfFormat, process.env.ABSTRACT_FOLDER_ID);
  }
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

app.post("/create_preference", (req, res) => {
  const { description } = req.body;
  const values = {
    title: "",
    unit_price: 0,
    quantity: 1,
    currency_id: "USD",
  };
  switch (description) {
    case "postdocs":
      values.title = "Postdocs / Reasearchers / Professors ";
      values.unit_price = 405;
      break;

    case "phdstudents":
      values.title = "Master / PhD Students ";
      values.unit_price = 270;
      break;

    case "undergraduates":
      values.title = "Undergraduate Students ";
      values.unit_price = 225;
      break;

    case "dinner":
      values.title = "Dinner ";
      values.unit_price = 1;
      break;

    case "accompanying":
      values.title = "Accompanying ";
      values.unit_price = 180;
      break;
  }

  console.log(values)
  let preference = {
    items: [values],
    back_urls: {
      success: "https://quitel23.site/registration-info",
      failure: "https://quitel23.site/registration-info",
      pending: "",
    },
    auto_return: "approved",
  };
  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      res.json({ id: response.body.id });
    })
    .catch({
      function(error) {
        console.log(error);
      },
    });
});

app.listen(port, () => console.info(`server started correctly`));
