import express from "express";
import {
  getAllData,
  getDetailedData,
  addDataPage,
  addData,
  updateDataPage,
  updateData,
  deleteData,
} from "../controllers/data.controller.js";
const router = express.Router();

// Home
router.get("/", getAllData);

// Show
router.get("/show-data/:id", getDetailedData);

// Add Data
router.get("/add-data", addDataPage);
router.post("/add-data", addData);

// Update Data
router.get("/update-data/:id", updateDataPage);
router.post("/update-data/:id", updateData);

// Delete Data
router.get("/delete-data/:id", deleteData);

export default router;
