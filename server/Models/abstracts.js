let mongoose = require('mongoose');
let schema = mongoose.Schema;

let abstractSchema = new schema({
    email:String,
    firstName:String,
    lastName:String,
    title:String
})

let abstract = mongoose.model("Abstract",abstractSchema)