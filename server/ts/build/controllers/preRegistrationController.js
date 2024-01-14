"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPreRegistration = exports.searchExistenPreRegistration = void 0;
const preRegistrationModel_1 = require("../models/preRegistrationModel");
// Search if exist registratio
const searchExistenPreRegistration = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    yield preRegistrationModel_1.preRegister.findOne({ email }).then((data) => {
        if (data) {
            next();
        }
        res.status(404).json({ message: 'No existe registro' });
    });
});
exports.searchExistenPreRegistration = searchExistenPreRegistration;
// Create pre-registration
const createPreRegistration = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    const newPreRegistration = new preRegistrationModel_1.preRegister({ email });
    yield newPreRegistration.save().then(() => {
        res.status(201).json({ message: 'success' });
    });
});
exports.createPreRegistration = createPreRegistration;
