import { google } from "googleapis";
import stream from "stream";
// Google Drive API configuration
// Google Authentication credentials init
const auth = new google.auth.GoogleAuth({
    keyFile: "../credential.json", // Key file with credentials
    scopes: ["https://www.googleapis.com/auth/drive"], // Google Drive API url
});

export const uploadFile = async (fileObject: any, parentFolder: string) => {
    const bufferStream = new stream.PassThrough();
    bufferStream.end(fileObject["data"]);
    await google.drive({
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
};