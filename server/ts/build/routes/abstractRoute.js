"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const abstractController_1 = require("../controllers/abstractController");
const mailController_1 = require("../controllers/mailController");
const express_1 = require("express");
const router = (0, express_1.Router)();
// Unique route for pre-registration
router.post('/abstract', abstractController_1.createAbstract, abstractController_1.uploadAbstractFiles, (req, res) => {
    (0, mailController_1.sendMail)(req.body.abstract, "Pre registration to QUITEL 2023 Montevideo-Uruguay completed successfully", "QUITEL 2023 Pre Registration");
});
exports.default = router;
