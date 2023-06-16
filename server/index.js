//MongoDB Schemas
const preRegister = require("./Models/pre-register");
const Register = require("./Models/registration");
const Abstract = require('./Models/abstracts');
const mongoose = require("mongoose");

//Google API modules
const authentication = require("./js/google-sheet");
const uploadFile = require("./js/g_drive.js");
const nodemailer = require("nodemailer");

//Express modules
const fileUpload = require('express-fileupload');
const bodyParse = require("body-parser");
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

//.env variables from railway
require("dotenv").config();

//Google Drive Folder ID
const registrationID = process.env.REGISTRATION_FOLDER_ID;
const preRegisterID = process.env.PREREGISTER_FOLDER_ID;

//mongoose configuration
mongoose.connect(process.env.MONGODB);
db = mongoose.connection.once("open", () => {
  console.log("Mongodb connected");
});

//express conficurations
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParse.json());
app.use(cors());
app.use(fileUpload());
 
//Home redirection Route
app.get("/", (req, res) => {
  res.redirect("https://quitel23.site/Quitel/");
});

//Routes POST
app.post("/pre-registration", (req, res) => {
  const data = req.body.preRegistration;
  console.log(data);
  let postData = new preRegister(data);
  preRegister
    .findOne({
      email: data["email"],
    })
    .then((result) => {
      console.log(result);
      if (result == null) {
        //Save data on MongoDB
        postData.save();

        //Send confirmation mail
        SendMail(
          data,
          "Pre registration to QUITEL 2023 Montevideo-Uruguay completed successfully",
          "QUITEL 2023 Pre Registration"
        );
        res.json('success');
      } else {
        res.json("already-pre-registered");
      }
    });

  //Sheet data append
  // sendSheetData(registrationID,data);

});
 
//Registration Data Form Receiver
app.post("/registration-data", (req, res) => {
  const data = req.body.registration;
  // const file = req.files;
  let postData = new Register(data);
  Register.findOne({
    email: data["email"],
  }).then((result) => {
    if (result == null) {
      //MongoDB successfull
      postData.save();

      //Send mailOptions
      SendMail(
        data,
        "Registration to QUITEL 2023 Montevideo-Uruguay completed successfully",
        "QUITEL 2023 Registration"
      );

      // //Shet data append
      // //sendSheetData(registrationID,data)
      res.json('success')
    } else {
      res.json("already registered");
    }
  });
});

//Abstract Data Form Submition
app.post("/submit_abstract_data", (req, res) => {
  const body = req.body.abstract;
  let tempAbstractData = {
    email:'',
    firstName:'',
    lastName:'',
    title:''
  }
  Abstract
});

//Abstract Files Form Submition
app.post('/submit_abstract_files',(req,res) => {
  const files = req.files;
});


//Google Drive Sheet send method
async function sendSheetData(folderID, data) {
  const sheets = (await authentication).sheets;
  const response = sheets.spreadsheets.values.append({
    spreadsheetID: folderID,
    range: "Sheet1",
    valueInputOption: "USER_ENTERED",
    resource: [[]],
  });
}

//email configuration
const mail = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "aguslblumenfeld@gmail.com",
    pass: "lnfzwfsumfidaxjd",
  },
});

//Email send method
function SendMail(receiver, message, subject) {
  //mail individual options
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


app.listen(port, () => console.info(`server listening in port ${port}`));
