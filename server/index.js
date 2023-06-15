const authentication = require('./js/google-sheet')
const preRegister = require("./Models/pre-register");
const Register = require('./Models/registration');
const uploadFile = require('./js/g_drive.js')
const nodemailer = require("nodemailer");
const bodyParse = require('body-parser');
const mongoose = require("mongoose");
const express = require("express");
const fileUpload = require('express-fileupload')
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000

require('dotenv').config()

const registrationID = process.env.REGISTRATION_FOLDER_ID
const preRegisterID = process.env.PREREGISTER_FOLDER_ID

//mongoose configuration
mongoose.connect(process.env.MONGODB);
db = mongoose.connection.once("open", () => {
  console.log('Mongodb connected')
})
console.log("server start")




//express conficurations
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParse.json());
app.use(cors({
  origin:"https://www.quitel23.site/",
  methods:["GET","POST"]
}));
app.use(fileUpload());
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
    next(); 
})

app.get('/',(req,res)=>{
  res.redirect('https://quitel23.site/Quitel/')
})

//Routes POST
app.post("/pre-registration", (req, res) => {
  const data = req.body.preRegistration;
  console.log(data);
  let postData = new preRegister(data);
  preRegister.findOne({
    email:data['email']
  }).then( result =>{
    console.log((result))
    if (result == null ){
      postData.save()
      res.json('success')
      SendMail(data,"Pre registration to QUITEL 2023 Montevideo-Uruguay completed successfully","QUITEL 2023 Pre Registration")
    }else{
      res.json('user already pre-registered')
    }
  });

  //Sheet data append
  // sendSheetData(registrationID,data);

  //Mail with data
  // SendMail(data);
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
  const data = req.body;
  const file = req.files;
  console.log(file)
  console.log(data)
  let postData = new Register(data);
  Register.findOne({
    email:data['email']
  }).then(result =>{
      if (result == null){

        //MongoDB successfull
        postData.save()

        //Send mailOptions
        SendMail(data,"Registration to QUITEL 2023 Montevideo-Uruguay completed successfully","QUITEL 2023 Registration")
        
        //Shet data append
        //sendSheetData(registrationID,data)

      }else{
        res.json('already registered')
      }
    });
});


//Abstract submition
app.post("/submit_abstract",(req,res) =>{
  const data = req.body;
  const file = req.file;
  SendMail(data,'Your Abstract submited successfully. \n Wait for further notices about aproval or modifications ','QUITEL 2023 ABSTRACT SUBMITION');});

//email send methods


async function sendSheetData(folderID,data) {
  const sheets = (await authentication).sheets;
  const response = sheets.spreadsheets.values.append({
    spreadsheetID: folderID,
    range: 'Sheet1',
    valueInputOption: "USER_ENTERED",
    resource: [
      []
    ]
  });
}


//email configuration
const mail = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: "aguslblumenfeld@gmail.com",
    pass: "lnfzwfsumfidaxjd"
  }
});

//Email send method
function SendMail(reciver, message, subject) {
  //mail individual options
  let mailOptions = {
    from: "aguslblumenfeld@gmail.com",
    to: reciver['email'],
    subject: subject,
    text: `${reciver['firstName']} ${reciver['lastName']} : \n ${message}`,
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
