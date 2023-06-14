let mongoose = require('mongoose');
let schema = mongoose.Schema;

let registerSchema = new schema({
    email:String,
    name:String,
    lastName: String,
    gender: String,
    levelEducatino: String,
    position: String,
    mainInstitution: String,
    institutionAddress: String,
    country: String,
    region: String,
    postal: Number,
    modality: String,
    speacialMeal: String,
    motherLanguage:String
    
});


let Register = mongoose.model("Register",registerSchema);

module.exports = Register;
