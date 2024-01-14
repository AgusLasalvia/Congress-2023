"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Abstract = void 0;
const mongoose_1 = require("mongoose");
const abstractSchema = new mongoose_1.Schema({
    email: String,
    firstName: String,
    lastName: String,
    title: String
});
exports.Abstract = (0, mongoose_1.model)("Abstract", abstractSchema);
