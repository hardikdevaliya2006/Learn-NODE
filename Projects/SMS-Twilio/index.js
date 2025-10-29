import express from "express";
import dotenv from "dotenv";
import twilio from "twilio";
dotenv.config()
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = new twilio(accountSid, authToken);

app.get("/", (req, res) => {
  res.render("smsform");
});

app.post("/sendsms", async (req, res) => {
  const { to, message } = req.body;
  try {
    const result = await client.messages.create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: to,
    });

    res.status(200).json({
      sid: result.sid,
      message: "SMS Droped...",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to send SMS",
      error: error.message,
    });
  }
});
