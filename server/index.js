const nodemailer = require("nodemailer");
const express = require("express");
const cors = require("cors");
const https = require('https')
const http = require('http')
const fs = require('fs')
const app = express();


//https configuration
const httpsPort = process.env.PORT || 5000; 
var httpsCongig = {
  key: fs.readFileSync('./private/keys/key.pam'),
  cert: fs.readFileSync('./private/keys/cert.cert')
}

https.createServer(httpsCongig, app).listen(https);

//http configuration
const httpPort = process.env.PORT || 4000;
http.createServer(app).listen(httpPort);


//email configuration
var mail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "",
    pass: "",
  },
});

//express conficurations
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post("/pre_registration", (req, res) => {
  const { email, name, lastname, gender, level_ed, country, institution } =
    req.body;
});

app.post("/registration", (req, res) => {
  const {
    email,
    name,
    lastname,
    gender,
    level_ed,
    position,
    main_inst,
    inst_addrs,
    country,
    region,
    city,
    postal,
    modality,
    sp_meal,
    first_reg,
    m_language,
  } = req.body;
});


//email send methods
function SendMail(reciver, attachment) {
  //mail individual options
  var mailOptions = {
    from: "quitel's mail",
    to: reciver,
    subject: "example: Payment notification",
    text: "",
  };
  if (attachment) {
    mailOptions["attachment"] = {
      filename: attachment,
      content: new Buffer(attachment, "utf-8"),
    };
  }

  mail.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log("Email sent successfully: " + info.response);
    }
  });
}
