import express from "express";
import router from "./routes/data.routes.js";
import connectDB from "./config/database.js";
const app = express();

const PORT = process.env.PORT;

// Database Connection
connectDB();

// Middlewares
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");

// Routes
app.use("/", router);

app.listen(PORT, () => {
  console.log("Server running at http://localhost:3000");
});
