"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Node modules imports
const express_1 = __importDefault(require("express"));
const mongoose_1 = require("mongoose");
const dotenv_1 = require("dotenv");
const cors_1 = __importDefault(require("cors"));
(0, dotenv_1.config)(); // Dotenv configuration
const baseUrl = '/api/v1';
//Routes imports
const preRegistrationRoute_1 = __importDefault(require("./routes/preRegistrationRoute"));
const registrationRoute_1 = __importDefault(require("./routes/registrationRoute"));
const abstractRoute_1 = __importDefault(require("./routes/abstractRoute"));
// Server setup
const app = (0, express_1.default)();
// Mongoose configuration
(0, mongoose_1.connect)(process.env.MONGODB)
    .then(() => console.log('MongoDB connected successfully'))
    .catch((err) => console.log(err.message));
// Express configuration
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Routes
app.use(baseUrl, abstractRoute_1.default); // Abstract route
app.use(baseUrl, registrationRoute_1.default); // Registration route
app.use(baseUrl, preRegistrationRoute_1.default); // Pre-registration route
// Redirect to website
app.get('*', (req, res) => {
    res.redirect('https://quitel23.site/');
});
// Server start
app.listen(3030, () => {
    console.log(`
SERVER START SUCCESSFULLY
Server started on http://localhost:3030
    `);
});
