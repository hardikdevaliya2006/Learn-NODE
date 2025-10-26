import express from "express";
import cookieParser from "cookie-parser";
const app = express();

app.use(cookieParser('123'));

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.get("/set-cookie", (req, res) => {
  res.cookie("username", "hardi2006", {
    maxAge: 900000,
    httpOnly: true,
    signed: true
  });
  res.send("Cookie has been Set");
});

app.get("/get-cookie", (req, res) => {
  const username = req.signedCookies.username;
  if (!username) {
    res.send(`no cookie found!`);
  }
  res.send(`Cookie found : ${username}`);
});

app.get("/delete-cookie", (req, res) => {
  res.clearCookie("username");
  res.send(`Cookie has been Deleted`);
});
