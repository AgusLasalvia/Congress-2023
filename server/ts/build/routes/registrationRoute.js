"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const registrationController_1 = require("../controllers/registrationController");
const router = (0, express_1.Router)();
// Unique route for pre-registration
router.post('/registration', registrationController_1.searchExistenRegistration, registrationController_1.createRegistration);
exports.default = router;
