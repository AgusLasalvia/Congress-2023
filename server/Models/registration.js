let mongoose = require('mongoose');
let schema = mongoose.Schema;

let registerSchema = new schema({
    'email':String,
    'name':String,
    'lastname':String,
});


let Register = mongoose.model("Register",registerSchema);

module.exports = Register;
