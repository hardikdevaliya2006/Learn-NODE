import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const coonectDb = () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("Database Connected...");
    })
    .catch((error) => {
      error;
    });
};

export default coonectDb