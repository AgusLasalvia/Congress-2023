import { Schema, model } from "mongoose";

const abstractSchema = new Schema({
    email: String,
    firstName: String,
    lastName: String,
    title: String
})

export const Abstract = model("Abstract", abstractSchema);