import express from "express";
import mongoose from "mongoose";
import Student from "./models/student.model.js";
import studentRoutes from "./routes/student.routes.js";
import coonectDb from "./config/database.js";
coonectDb();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/students", studentRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});