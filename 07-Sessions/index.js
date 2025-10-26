import express from "express";
import session from "express-session";
import MongoStore from "connect-mongo";
const app = express();

app.use(
  session({
    secret: "123",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: "mongodb://127.0.0.1:27017/sessiondb" }),
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
  })
);

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

app.get("/", (req, res) => {
  if (req.session.username) {
    res.send(`<h1>Username is : ${req.session.username}</h1>`);
  } else {
    res.send("<h1>Not available...</h1>");
  }
});

app.get("/set-username", (req, res) => {
  req.session.username = "hardik2006";
  res.send("<h1>Username has been seted...</h1>");
});

app.get("/get-username", (req, res) => {
  if (req.session.username) {
    res.send(`<h1>Username is : ${req.session.username}</h1>`);
  } else {
    res.send("<h1>Not available...</h1>");
  }
});

app.get("/destory", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      res.status(500).send("<h1>Faild to destory session...</h1>");
    } else {
      res.send("<h1>Session Destoryed Successfully...</h1>");
    }
  });
});
