const express = require("express");
const app = express();
const cors = require("cors");
const nodemailer = require("nodemailer");

var mail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "",
    pass: "",
  },
});

//express conficurations
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post("/pre_registration", (req, res) => {
  const { email, name, lastname, gender, level_ed, country, institution } =
    req.body;
});

app.post("/registration", (req, res) => {
  const {
    email,
    name,
    lastname,
    gender,
    level_ed,
    position,
    main_inst,
    inst_addrs,
    country,
    region,
    city,
    postal,
    modality,
    sp_meal,
    first_reg,
    m_language,
  } = req.body;
});

function SendMail(reciver, attachment) {
  var mailOptions = {
    from: "quitel's mail",
    to: reciver,
    subject: "example: Payment notification",
    text: "",
  };
  if (attachment) {
    mailOptions["attachment"] = {
      filename: attachment,
      content: new Buffer(attachment, "utf-8"),
    };
  }
}
