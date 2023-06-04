const authentication = require('./js/google-sheet')
const preRegister = require("./Models/pre-register");
const Register = require('./Models/registration')
const googleSheet = require('./js/google-sheet');
const uploadFile = require('./js/g_drive.js')
const nodemailer = require("nodemailer");
const bodyParse = require('body-parser');
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const { auth } = require('google-auth-library');
const app = express();
require('dotenv').config()

const port = process.env.PORT || 5000


//mongoose configuration
mongoose.connect(process.env.MONGODB);
mongoose.connection.once("open", () => {
  console.log('Mongodb connected')
})
console.log("server start")
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
app.use(bodyParse.json());
app.use(cors());


//Routes POST
app.put("/pre_registration", (req, res) => {
  const data = req.body;
  preRegister.create(data);
  SendMail(data)
  res.redirect('https://www.quitel.site/')
});


app.post('/get_personInfo',(req,res)=>{
  const data = {
    'email': req.body.email
  }

  var result = preRegister.findOne(data);
  if (result != null){
    res.send(result)
  }else if(result === undefined){
    console.log('error on database');
  }else{
    res.redirect('') //Change URL of the home
  }
});

app.post("/registration",async (req, res) => {
  const data = req.body
  const  sheets  = (await authentication).sheets
  const response = await sheets.spreadsheets.values.append({
    spreadsheetID: process.env.REGISTRATION_ID_FOLDER,
    range:'Sheet1',
    valueInputOption: "USER_ENTERED",
    resource:[
      [  ]
    ]
  })
  result = Register.findOne({'email':data['email']});
  if (result === undefined || result === null){
    Register.create(data);

  }else{
    res.json({'message':'That person is already registed'})
  }
});


app.post("/submit_abstract",(req,res) =>{
  const data = req.body;
  const file = req.body.file
  SendMail(data,'Submition of Abstract from: ','Notification of abstract submition');
  });

//email send methods
function SendMail(reciver,message,subject) {
  //mail individual options
  var mailOptions = {
    from: "quitel2023@gmail.com",
    to: reciver['email'],
    subject: subject,
    text: message + `${reciver['email']}\n ${reciver['name']} ${reciver['lastName']}`
  };

  mail.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log("Email sent successfully: " + info.response);
    }
  });
};

app.listen(port,()=>console.info(`server listening in port ${port}`));
