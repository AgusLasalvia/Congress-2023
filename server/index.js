const authentication = require('./js/google-sheet')
const preRegister = require("./Models/pre-register");
const Register = require('./Models/registration');
const uploadFile = require('./js/g_drive.js')
const nodemailer = require("nodemailer");
const bodyParse = require('body-parser');
const mongoose = require("mongoose");
const express = require("express");
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
    if (result.email == null ){
      postData.save()
      res.json('success')
    }else{
      res.json('user pre-registered successfully')
    }
  });
  
  //MongoDB data Creation
  // preRegister.create(data);

  //Sheet data append
  // sendSheetData(registrationID,data);

  //Mail with data
  // SendMail(data);

  //Redorecton to home page
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

  result = Register.findOne({'email':data['email']});
  if (result === undefined || result === null) {
    
    //MongoDB insert method
    Register.create(data);

    //

  }else{
    res.json({'message':'That person is already registed'})
  }
});


app.post("/submit_abstract",(req,res) =>{
  const data = req.body;
  const file = req.file;
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

app.listen(port,()=>console.info(`server listening in port ${port}`));
