import express from "express";
import Student from "../models/student.model.js";
import multer from "multer";
import path from "path";
import fs from "fs";
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    const newFileName = Date.now() + path.extname(file.originalname);
    cb(null, newFileName);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Only Images Are Allowed..."), false);
  }
};

const upload = multer({
  storage,
  fileFilter: fileFilter,
  limits: {
    fieldSize: 1024 * 1024 * 3,
  },
});

// Get All Students Data
router.get("/", async (req, res) => {
  try {
    const search = req.query.search || "";
    const query = {
      $or: [
        { first_name: { $regex: search, $options: "i" } },
        { last_name: { $regex: search, $options: "i" } },
      ],
    };

    const students = await Student.find(query);
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get Single Student Data
router.get("/:id", async (req, res) => {
  try {
    const students = await Student.findById(req.params.id);
    if (!students) {
      return res.status(404).json({ message: "Student Not Found" });
    }
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add New Student
router.post("/", upload.single("profile_pic"), async (req, res) => {
  try {
    const student = new Student(req.body);
    if (req.file) {
      student.profile_pic = req.file.filename;
    }
    const newStudent = await student.save();
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update Student Data
router.put("/:id", upload.single("profile_pic"), async (req, res) => {
  try {
    const existingStudent = await Student.findById(req.params.id);
    if (!existingStudent) {
      if (req.file.filename) {
        const filePath = path.join("./uploads", req.file.filename);
        fs.unlink(filePath, (err) => {
          if (err) {
            console.log("Failed To delete image : ", err);
          }
        });
      }
      return res.status(404).json({ message: "Student Not Found" });
    }
    if (req.file) {
      if (existingStudent.profile_pic) {
        const oldImagePath = path.join(
          "./uploads",
          existingStudent.profile_pic
        );
        fs.unlink(oldImagePath, (err) => {
          if (err) {
            console.log("Failed To delete old image : ", err);
          }
        });
      }
      req.body.profile_pic = req.file.filename;
    }
    const updateStudent = await Student.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.status(200).json(updateStudent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete Student
router.delete("/:id", async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) {
      return res.status(404).json({ message: "Student Not Found" });
    }
    if (student.profile_pic) {
      const filePath = path.join("./uploads", student.profile_pic);
      fs.unlink(filePath, (err) => {
        if (err) {
          console.log("Failed To delete", err);
        }
      });
    }
    res.json({ message: "Student Deleted Successfully..." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
