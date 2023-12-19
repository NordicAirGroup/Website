require("dotenv").config({ path: __dirname + "/.env" });
const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: "smtp.sendgrid.net",
  port: 587,
  secure: false,
  auth: {
    user: "apikey",
    pass: process.env.SENDGRID_API_KEY,
  },
});

const messageQuota = {}; // Object to keep track of user message counts and timestamps

app.post("/send", (req, res) => {
  const { name, email, message } = req.body;

  const currentTime = new Date().getTime();
  const dayInMillis = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

  if (!messageQuota[email]) {
    messageQuota[email] = { count: 1, timestamp: currentTime };
  } else {
    if (currentTime - messageQuota[email].timestamp < dayInMillis) {
      if (messageQuota[email].count >= 2) {
        return res
          .status(429)
          .json({
            status: "error",
            message: "Message quota exceeded. Please wait 24 hours.",
          });
      }
      messageQuota[email].count++;
    } else {
      messageQuota[email] = { count: 1, timestamp: currentTime };
    }
  }

  const mailOptions = {
    from: "info@nordicairgroup.com",
    to: "info@nordicairgroup.com, joar@nordicairgroup.com, ersu@nordicairgroup.com",
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(500).json({ status: "error", message: error.message });
    } else {
      console.log("Email sent: " + info.response);
      res.json({ status: "success", message: "Email sent successfully!" });
    }
  });
});

app.get("/", (req, res) => {
  res.send("Backend server is running!");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
