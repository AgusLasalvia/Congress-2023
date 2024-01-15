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
exports.uploadAbstractFiles = exports.createAbstract = void 0;
const abstractModel_1 = require("../models/abstractModel");
const googleDriveController_1 = require("./googleDriveController");
const createAbstract = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const newAbstract = new abstractModel_1.Abstract(body);
    yield newAbstract.save().then(() => {
        res.status(2).json({ message: 'success' });
    });
});
exports.createAbstract = createAbstract;
const uploadAbstractFiles = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const files = req === null || req === void 0 ? void 0 : req.files; // Get all files from incoming Form
    // Check existing files, if exists, save it on Google Drive
    if ((files === null || files === void 0 ? void 0 : files.registration) != (undefined || null)) {
        yield (0, googleDriveController_1.uploadFile)(files.registration, process.env.REGISTRATION_FOLDER_ID);
        console.log("registration file uploaded");
    }
    if ((files === null || files === void 0 ? void 0 : files.dinner) != (undefined || null)) {
        yield (0, googleDriveController_1.uploadFile)(files.dinner, process.env.DINNER_FOLDER_ID);
        console.log("dinner file uploaded");
    }
    if ((files === null || files === void 0 ? void 0 : files.accompanying) != (undefined || null)) {
        yield (0, googleDriveController_1.uploadFile)(files.accompanying, process.env.ACCOMPANYING_FOLDER_ID);
        console.log("accompaning file uploaded");
    }
    next();
});
exports.uploadAbstractFiles = uploadAbstractFiles;
