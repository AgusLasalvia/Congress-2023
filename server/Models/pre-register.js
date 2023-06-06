let mongoose = require('mongoose');
let schema = mongoose.Schema;

let preRegisterSchema = new schema({
    email: String,
    firtName:String,
    lastName:String,
    gender:String,
    educationLevel:String,
    country:String,
    mainIbnstitution:String,
    hasAttended:String,
    mail:String
});

let preRegister = mongoose.model("PreRegister",preRegisterSchema);

module.exports = preRegister;
