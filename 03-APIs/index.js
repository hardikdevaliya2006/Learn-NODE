import express from "express";
import studentRoutes from "./routes/student.routes.js";
import userRoutes from "./routes/user.routes.js";
import coonectDb from "./config/database.js";
import auth from "./middlewares/auth.js";
import { MulterError } from "multer";
import cors from "cors";
import path from "path";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { fileURLToPath } from "url";
coonectDb();

const app = express();
const PORT = process.env.PORT || 3000;

const limiter = rateLimit({
  windowMs: 1000 * 60,
  max: 5,
  message: "Too many request",
});

app.use(
  "/uploads",
  express.static(
    path.join(path.dirname(fileURLToPath(import.meta.url)), "uploads")
  )
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
// app.use(helmet())
// app.use(limiter);

app.use("/api/user", userRoutes);
app.use(auth);
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
