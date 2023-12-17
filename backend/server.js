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
  secure: false, // Note: 'secure' is false because we are using port 587 (not 465)
  auth: {
    user: "apikey", // This should remain the string 'apikey'
    pass: process.env.SENDGRID_API_KEY,
  },
});

app.post("/send", (req, res) => {
  const { name, email, message } = req.body;
  const mailOptions = {
    from: "info@nordicairgroup.com",
    to: "info@nordicairgroup.com, joar@nordicairgroup.com, ersu@nordicairgroup.com",
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(500).json({ status: "error", message: error.message }); // Send back a JSON with error details
    } else {
      console.log("Email sent: " + info.response);
      res.json({ status: "success", message: "Email sent successfully!" }); // Send back a JSON with success message
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
