"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const preRegistrationController_1 = require("../controllers/preRegistrationController");
const express_1 = require("express");
const router = (0, express_1.Router)();
// Unique route for pre-registration
router.post('/pre-registration', preRegistrationController_1.searchExistenPreRegistration, preRegistrationController_1.createPreRegistration);
exports.default = router;
