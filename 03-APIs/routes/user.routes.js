import express from "express";
import StudentUser from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const isExstingUser = await StudentUser.findOne({
      $or: [{ username }, { email }],
    });

    if (isExstingUser) {
      return res
        .status(400)
        .json({ message: "User Name Or Email Is Alredy Exists." });
    }

    const hasedPassword = await bcrypt.hash(password, 10);
    const newUser = new StudentUser({
      username,
      email,
      password: hasedPassword,
    });
    const saveNewuser = await newUser.save();
    res.json(saveNewuser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const isUserExists = await StudentUser.findOne({ username });
    if (!isUserExists) {
      return res.status(404).json({ message: "User Not Found" });
    }

    const isPasswodMatch = await bcrypt.compare(
      password,
      isUserExists.password
    );
    if (!isPasswodMatch) {
      return res.status(400).json({ message: "Invalid Credentials!" });
    }

    const token = jwt.sign(
      {
        userId: isUserExists._id,
        username: isUserExists.username,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/logout", async (req, res) => {
  res.json({ message: "Logout Successfully..." });
});

export default router;
