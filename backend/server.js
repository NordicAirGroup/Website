const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "YourEmailServiceProvider", // e.g., 'Gmail', 'Outlook'
  auth: {
    user: "your-email@gmail.com", // Your email
    pass: "your-password", // Your password
  },
});

app.post("/send", (req, res) => {
  const { name, email, message } = req.body;
  const mailOptions = {
    from: email,
    to: "joar@nordicairgroup.com",
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.send("error"); // if fail
    } else {
      console.log("Email sent: " + info.response);
      res.send("success"); // if success
    }
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
