import express from "express";
import dotenv from "dotenv";
import session from "express-session";
import passport from "passport";
import "./auth/google.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

function authCheck(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/");
}

app.listen(PORT, () => {
  console.log("Server running at http://localhost:3000");
});

app.get("/", (req, res) => {
  res.send('<a href="/auth/google">Login With Google</a>');
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/",
    successRedirect: "/profile",
  })
);

app.get("/profile", authCheck, (req, res) => {
  console.log(req.user);
  res.send(
    `<h1>Hello Wellcome ${req.user.displayName}</h1><br /><a href='logout'>Logout</a><br /><img height=25 width=25 src=${req.user.photos[0].value}>`
  );
});

app.get("/logout", (req, res) => {
  req.logOut(() => {
    res.redirect("/");
  });
});
