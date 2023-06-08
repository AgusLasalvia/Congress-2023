let mongoose = require('mongoose');
let schema = mongoose.Schema;

let preRegisterSchema = new schema({
    email: String,
    firstName:String,
    lastName:String,
    gender:String,
    educationLevel:String,
    country:String,
    mainIbnstitution:String,
    hasAttended:String,
    mail:String
});

let preRegister = mongoose.model("PreRegister",preRegisterSchema,"QUITEL");

module.exports = preRegister;
