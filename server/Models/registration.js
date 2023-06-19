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
    city: String,
    zipCode: String,
    modality: String,
    firstTime: String,
    specialMealReqs: String,
    motherLanguage: String
    
});


let Register = mongoose.model("Register",registerSchema);

module.exports = Register;
