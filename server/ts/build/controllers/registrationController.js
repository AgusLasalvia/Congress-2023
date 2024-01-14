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
exports.createRegistration = exports.searchExistenRegistration = void 0;
const registrationModel_1 = require("../models/registrationModel");
const searchExistenRegistration = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    yield registrationModel_1.Register.findOne({ email }).then((data) => {
        if (data.email !== email)
            next();
        else
            res.status(404).json({ message: 'Already Registered' });
    });
});
exports.searchExistenRegistration = searchExistenRegistration;
const createRegistration = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const newRegistration = new registrationModel_1.Register(body);
    yield newRegistration.save().then(() => {
        res.status(201).json({ message: 'success' });
    });
});
exports.createRegistration = createRegistration;
