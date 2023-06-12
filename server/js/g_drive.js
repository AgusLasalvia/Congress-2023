const fs = require("fs");
const { google } = require("googleapis");

async function uploadFile(mimeType,bodyFile) {
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
      parents: [process.env.GOOGLE_IP_FOLDER_ID],
    };
    const media = {
      MimeType: mimeType,
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

module.exports = uploadFile();
