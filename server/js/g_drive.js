const fs = require("fs");
const { google } = require("googleapis");

const GOOGLE_IP_FOLDER_ID = "";

export async function uploadFile() {
  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: "./googlekey.json",
      scopes: ["https://www.googleapis.com/auth/drive"],
    });

    const driveService = google.drive({
      version: "v3",
    });

    const fileData = {
      name: "",
      parents: [GOOGLE_IP_FOLDER_ID],
    };
    const media = {
      MimeType: "pdf",
      body: fs.createReadStream(),
    };

    const response = driveService.files.create({
      resource: fileData,
      media: media,
      field: "id",
    });

    return response.data.id;
  } catch {
    console.log("error");
  }
}
