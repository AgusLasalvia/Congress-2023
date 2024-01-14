"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Register = void 0;
const mongoose_1 = require("mongoose");
const registerSchema = new mongoose_1.Schema({
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
exports.Register = (0, mongoose_1.model)("Register", registerSchema);
