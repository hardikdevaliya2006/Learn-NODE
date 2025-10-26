import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import session from "express-session";
import User from "./model/user.model.js";
const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/user-crud").then(() => {
  console.log("Databse Connected...");
});

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  session({
    secret: "123",
    resave: false,
    saveUninitialized: false,
  })
);

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

app.get("/", (req, res) => {
  res.send(
    `<h1>Wellcome To The Home Page</h1> <p>Hello, ${req.session.user} </p>`
  );
});

app.get("/login", (req, res) => {
  res.render("login", { error: null });
});

app.post("/login", async (req, res) => {
  const { username, userpassword } = req.body;

  const user = await User.findOne({ username });
  if (!user) {
    return res.render("login", { error: "User name Not Found..." });
  }

  const isMatch = await bcrypt.compare(userpassword, user.userpassword);
  if (!isMatch) {
    return res.render("login", { error: "Password Wrong..." });
  }

  req.session.user = username;
  res.redirect("/");
});

app.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/login");
  });
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", async (req, res) => {
  const { username, userpassword } = req.body;
  const hasedPassword = await bcrypt.hash(userpassword, 10);
  await User.create({ username, userpassword: hasedPassword });
  res.send({ username, userpassword: hasedPassword });
});
