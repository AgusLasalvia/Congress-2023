import { model, Schema } from 'mongoose';

const registerSchema = new Schema({
    email: String,
    firstName: String,
    lastName: String,
    gender: String,
    educationLevel: String,
    position: String,
    mainInstitution: String,
    institutionalAddress: String,
    country: String,
    region: String,
    city: String,
    zipCode: String,
    modality: String,
    firstTime: String,
    specialMealReqs: String,
    motherLanguage: String

});


export const Register = model("Register", registerSchema);