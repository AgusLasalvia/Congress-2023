let mongoose = require('mongoose');
let schema = mongoose.Schema;

let preRegisterSchema = new schema({
    email: String,
    firtName:String,
    lastName:String,
    gender:String,
    level:String,
    country:String,
    institution:String,
    attendend:String,
    infromation:Boolean
});

let preRegister = mongoose.model("PreRegister",preRegisterSchema);

module.exports = preRegister;