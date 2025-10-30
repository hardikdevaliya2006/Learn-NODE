import express, { text } from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import path from "path";
dotenv.config();
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");

const transpoter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "hardikdevaliya2006@gmail.com",
    pass: process.env.GOOGLE_APP_PASS,
  },
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

app.get("/", (req, res) => {
  res.render("mailform");
});

app.post("/sendmail", async (req, res) => {
  const { to, subject, text } = req.body;

  try {
    const info = await transpoter.sendMail({
      from: "'Suresh' <hardikdevaliya2006@gmail.com>",
      to: to,
      subject: subject,
      text: text,
      attachments: [
        {
          filename: "image.jpg",
          path: path.resolve("Files", "image.jpg"),
        },
      ],
    });

    res.json({ message: "Email Sent!", info });
  } catch (error) {
    res.status(500).json({ message: "Failed To sent Mail", error });
  }
});
