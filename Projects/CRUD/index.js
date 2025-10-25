import express, { json } from "express";
import mongoose from "mongoose";
import data from "./models/data.model.js";
const app = express();

// Database Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/data-crud")
  .then(() => console.log("Database Connected..."));

// Middlewares
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");

// Routes
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

// Home
app.get("/", async (req, res) => {
  const dataList = await data.find();
  res.render("home", { dataList });
});

// Show
app.get("/show-data/:id", async (req, res) => {
  const requestedData = await data.findById(req.params.id);
  res.render("show-data", { requestedData });
});

// Add Data
app.get("/add-data", (req, res) => {
  res.render("add-data");
});

app.post("/add-data", async (req, res) => {
  await data.create(req.body);
  res.redirect("/");
});

// Update Data
app.get("/update-data/:id", async (req, res) => {
  const requestedData = await data.findById(req.params.id);
  res.render("update-data", { requestedData });
});

app.post("/update-data/:id", async (req, res) => {
  await data.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/");
});

// Delete Data
app.get("/delete-data/:id", async (req, res) => {
  await data.findByIdAndDelete(req.params.id);
  res.redirect('/')
});
