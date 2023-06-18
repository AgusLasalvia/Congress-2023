const fs = require("fs");
const { google } = require("googleapis");

const upload = multer()

const auth = new google.auth.GoogleAuth({
  keyFile: "./googlekey.json",
  scopes: ["https://www.googleapis.com/auth/drive"],
});

async function uploadFiles(mimeType,bodyFile) {
  try{
    for(let i=0;i<files.length,i++){
      await uploadFile
    }
  }

}

module.exports = uploadFile();
