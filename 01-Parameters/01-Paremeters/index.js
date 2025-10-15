const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

app.get("/", (req, res) => {
  res.send("🚀 Hello Express!");
});

app.get("/user/:id", (request, response) => {
  const userId = request.params.id;
  response.send(`You requested user with ID: ${userId}`);
});

app.get("/product/:category/:pid", (request, response) => {
  const { category, pid } = request.params;
  response.send(`Category: ${category}, Product ID: ${pid}`);
});