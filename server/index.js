const preRegister = require("./Models/pre-register");
const Register = require('./Models/registration')
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
require('dotenv').config()

//mongoose configuration
mongoose.connect(process.env.MONGODB);
console.log(process.env.MONGODB);
console.log(process.env.PORT);

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
  const data = req.body;
  preRegister.create(data);
});


app.post('/get_personInfo',(req,res)=>{
  const data = {
    'email':req.body.email
  }

  var result = preRegister.findOne(data);
  if (result != null){
    res.send(result)
  }else if(result === undefined){
    console.log('error on database');
  }else{
    res.redirect('') //Change URL of the 
  }
});

app.post("/registration", (req, res) => {
  const { email } = req.body.email;
  const data = req.body
  result = Register.findOne({'email':email});
  if (result === undefined || result === null){
    Register.create(data);
  }else{
    res.json({'message':'That person is already registed'})
  }
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
  if (attachment != null) {
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

app.listen(process.env.PORT,`server listening in port ${process.env.PORT}`);
