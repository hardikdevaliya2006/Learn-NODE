import express from "express";
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.listen(3000, () => {
  console.log("App running on http://localhost:3000");
});

app.get("/", (req, res) => {
  res.send("EJS Started");
});

app.get("/index", (req, res) => {
    const language = ['js', 'react.js', 'node.js', 'C', 'C++']
  res.render("index", {
    title: "This is Home Page",
    userName: "hardikdevaliya2006",
    language,
    message:
      "You Are Located At the home Page Of the Our Site Localhost : 3000",
  });
});
