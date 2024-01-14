"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const abstractController_1 = require("../controllers/abstractController");
const express_1 = require("express");
const router = (0, express_1.Router)();
// Unique route for pre-registration
router.post('/abstract', abstractController_1.createAbstract, abstractController_1.uploadAbstractFiles);
exports.default = router;
