import express from "express";
import cookieParser from 'cookie-parser'
import csurf from "csurf";
const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser())
const csrfProtection = csurf({cookie: true})

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

app.get("/myform", csrfProtection, (req, res) => {
  res.render("myform", {csrfToken: req.csrfToken()});
});

app.post("/submit", csrfProtection, (req, res) => {
  res.send(req.body);
});
