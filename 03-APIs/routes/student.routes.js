import express from "express";
import Student from "../models/student.model.js";
const router = express.Router();

// Get All Students Data
router.get("/", async (req, res) => {
  try {
    const students = await Student.find();
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
router.post("/", async (req, res) => {
  try {
    const newStudent = await Student.create(req.body);
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update Student Data
router.put("/:id", async (req, res) => {
  try {
    const updateStudent = await Student.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (!updateStudent) {
      return res.status(404).json({ message: "Student Not Found" });
    }
    res.status(200).json({ message: "Recored Updated Successfully..." });
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
    res.json({ message: "Student Deleted Successfully..." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
