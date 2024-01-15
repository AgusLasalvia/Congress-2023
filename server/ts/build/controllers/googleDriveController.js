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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFile = void 0;
const googleapis_1 = require("googleapis");
const stream_1 = __importDefault(require("stream"));
// Google Drive API configuration
// Google Authentication credentials init
const auth = new googleapis_1.google.auth.GoogleAuth({
    keyFile: "../credential.json",
    scopes: ["https://www.googleapis.com/auth/drive"], // Google Drive API url
});
const uploadFile = (fileObject, parentFolder) => __awaiter(void 0, void 0, void 0, function* () {
    const bufferStream = new stream_1.default.PassThrough();
    bufferStream.end(fileObject["data"]);
    yield googleapis_1.google.drive({
        version: "v3",
        auth: auth,
    })
        .files.create({
        media: {
            mimeType: fileObject["mimetype"],
            body: bufferStream,
        },
        requestBody: {
            name: fileObject["name"],
            parents: [parentFolder],
        },
    });
});
exports.uploadFile = uploadFile;
