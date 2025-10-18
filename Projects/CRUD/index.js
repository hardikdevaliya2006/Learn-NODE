import express from "express";
import mongoose from "mongoose";
const app = express();

// Data base Connecation

// Middleware
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use(express.static("public"));

// Routes
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

app.get("/", (req, res) => {
  res.render("home");
});

// Show
app.get("/show-data", (req, res) => {
  res.render("show-data");
});

// Add Data
app.get("/add-data", (req, res) => {
  res.render("add-data");
});

app.post("/add-data", (req, res) => {});

// Update Data
app.get("/update-data", (req, res) => {
  res.render("update-data");
});

app.post("/update-data", (req, res) => {});

// Delete Data
app.get("/delete-data", (req, res) => {});
