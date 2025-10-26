import express from "express";
import multer from "multer";
import path from "path";
const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./upload");
  },
  filename: (req, file, cb) => {
    const newFileName = Date.now() + path.extname(file.originalname);
    cb(null, newFileName);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.fieldname === "file") {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      cb(null, true);
    } else {
      cb(new Error("Only Images Allowed."), false);
    }
  } else if (file.fieldname === "userfile") {
    if (file.mimetype === "application/pdf") {
      cb(null, true);
    } else {
      cb(new Error("Only PDF Allowed."), false);
    }
  } else {
    cb(new Error("Unknown Field."), false);
  }
};

const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 3,
  },
  fileFilter,
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

app.get("/myform", (req, res) => {
  res.render("myform");
});

/* For Single File Upload
app.post("/submitform", upload.array("file", 3), (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).send(`No File Uploaded`);
  }
  res.send(req.files);
});
*/

/* For Multiple File Upload */
app.post(
  "/submitform",
  upload.fields([
    { name: "file", maxCount: 1 },
    { name: "userfile", maxCount: 3 },
  ]),
  (req, res) => {
    if (!req.files || req.files.length === 0) {
      return res.status(400).send(`No File Uploaded`);
    }
    res.send(req.files);
  }
);

app.use((error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    if (error.code === "LIMIT_UNEXPECTED_FILE") {
      return res.status(400).send(`Error : Too many file uploaded!`);
    }
    return res
      .status(400)
      .send(`Multer error : ${error.message} : ${error.code}`);
  } else if (error) {
    return res.status(500).send(`Server Error : ${error.message}`);
  }
  next();
});
