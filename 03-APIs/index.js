import express from "express";
import studentRoutes from "./routes/student.routes.js";
import coonectDb from "./config/database.js";
import { MulterError } from "multer";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
coonectDb();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  "/uploads",
  express.static(
    path.join(path.dirname(fileURLToPath(import.meta.url)), "uploads")
  )
);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/students", studentRoutes);

app.use((error, req, res, next) => {
  if (error instanceof MulterError) {
    return res
      .status(404)
      .send(`Image Upload Error : ${error.message} ${error.code}`);
  } else if (error) {
    return res.status(500).send(`Something Went Wrong : ${error.message}`);
  }
  next();
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
