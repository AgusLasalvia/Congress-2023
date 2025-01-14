import { model, Schema } from 'mongoose';

const preRegisterSchema = new Schema({
    email: String,
    firstName: String,
    lastName: String,
    gender: String,
    educationLevel: String,
    country: String,
    mainInstitution: String,
    hasAttended: String,
    mail: String
});

export const preRegister = model("PreRegister", preRegisterSchema);