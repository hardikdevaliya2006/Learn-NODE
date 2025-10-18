const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

app.get("/", (request, response) => {
  response.send("Ok");
});

app.get("/sendText", (request, response) => {
  response.send("This is text");
});

app.get("/sendHTML", (request, response) => {
  response.send("<h1>This is HTML<h1>");
});

app.get("/sendObject", (request, response) => {
  response.send({
    name: "Hardik Devaliya",
    Age: 19,
  });
});

app.get("/sendArray", (request, response) => {
  const user = ["Scott", "DBA"];
  response.send(user);
});

app.get("/sendArrayOfObject", (request, response) => {
  const user = [
    { name: "Scott", Age: NaN },
    { name: "DBA", Age: NaN },
  ];
  response.send(user);
});

app.get("/sendJson", (request, response) => {
  const user = [
    { name: "Scott", Age: NaN },
    { name: "DBA", Age: NaN },
  ];
  response.json(user);
});

app.get("/sendJsonp", (request, response) => {
  const user = [
    { name: "Scott", Age: NaN },
    { name: "DBA", Age: NaN },
  ];
  response.jsonp(user);
});

app.get("/redirect", (request, response) => {
  response.redirect(301, "https://google.com");
});

app.get("/redirectBack", (request, response) => {
  response.redirect("..");
});

app.set("view engine", "ejs");

app.get("/render", (request, response) => {
  response.render("render");
});

app.get("/download", (request, response) => {
  response.download("./data/RESUME.pdf", "Hardik Devaliya.pdf");
});

app.get("/prewiewFile", (request, response) => {
  response.sendFile(__dirname + "/data/RESUME.pdf");
});

app.get("/end", (request, response) => {
  response.write("Success!");
  response.end();
});

app.get("/error", (request, response) => {
  response.status(500).send("Error");
});

app.get("/check", (request, response) => {
  response.set('custom-header', 'dfrte4te57tdfer85edfd24g')
  console.log(response.get('custom-header'))
  response.send("Haeder set")
});

