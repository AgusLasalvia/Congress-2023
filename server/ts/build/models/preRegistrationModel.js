"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.preRegister = void 0;
const mongoose_1 = require("mongoose");
const preRegisterSchema = new mongoose_1.Schema({
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
exports.preRegister = (0, mongoose_1.model)("PreRegister", preRegisterSchema);
