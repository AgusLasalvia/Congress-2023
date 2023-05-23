const express = require('express');
const app = express();
const cors = require('cors');

//express conficurations 
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.post('/pre_registration',(req,res)=>{
  const {
    email,name,lastname,gender,
    level_ed,country,institution
  } = req.body


});


app.post('/registration',(req,res)=>{
  const {
    email,name,lastname,gender,
    level_ed,position,main_inst,
    inst_addrs,country,region,
    city,postal,modality,sp_meal,
    first_reg,m_language
  } = req.body
});
