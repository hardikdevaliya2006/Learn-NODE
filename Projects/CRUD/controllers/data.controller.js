import Data from "../models/data.model.js";
import mongoose from "mongoose";

export const getAllData = async (req, res) => {
  try {
    const { page = 1, limit = 5 } = req.query;
    const options = {
      page: parseInt(page),
      limit: parseInt(limit),
    };
    const dataList = await Data.paginate({}, options);
    if (!dataList) {
      res.render("404", { message: "Contact Not Found" });
    }
    res.render("home", {
      totalDocs: dataList.totalDocs,
      limit: dataList.limit,
      totalPages: dataList.totalPages,
      page: dataList.page,
      counter: dataList.pagingCounter ,
      hasPrevPage: dataList.hasPrevPage,
      hasNextPage: dataList.hasNextPage,
      prevPage: dataList.prevPage,
      nextPage: dataList.nextPage,
      dataList: dataList.docs,
    });
  } catch (error) {
    res.render("505", { message: error });
  }
};

export const getDetailedData = async (req, res) => {
  const isValidPram = mongoose.Types.ObjectId.isValid(req.params.id);

  if (!isValidPram) {
    res.render("404", { message: "Invalid ID" });
  }

  try {
    const requestedData = await Data.findById(req.params.id);
    if (!requestedData) {
      res.render("404", { message: "Contact Not Found" });
    }
    res.render("show-data", { requestedData });
  } catch (error) {
    res.render("505", { message: error });
  }
};

export const addDataPage = (req, res) => {
  res.render("add-data");
};

export const addData = async (req, res) => {
  try {
    await Data.create(req.body);
    res.redirect("/");
  } catch (error) {
    res.render("505", { message: error });
  }
};

export const updateDataPage = async (req, res) => {
  const isValidPram = mongoose.Types.ObjectId.isValid(req.params.id);

  if (!isValidPram) {
    res.render("404", { message: "Invalid ID" });
  }

  try {
    const requestedData = await Data.findById(req.params.id);
    if (!requestedData) {
      res.render("404", { message: "Contact Not Found" });
    }
    res.render("update-data", { requestedData });
  } catch (error) {
    res.render("505", { message: error });
  }
};

export const updateData = async (req, res) => {
  const isValidPram = mongoose.Types.ObjectId.isValid(req.params.id);

  if (!isValidPram) {
    res.render("404", { message: "Invalid ID" });
  }

  try {
    const isUpdated = await Data.findByIdAndUpdate(req.params.id, req.body);
    if (!isUpdated) {
      res.render("404", { message: "Contact Not Found" });
    }
    res.redirect("/");
  } catch (error) {
    res.render("505", { message: error });
  }
};

export const deleteData = async (req, res) => {
  try {
    const isDeleted = await Data.findByIdAndDelete(req.params.id);
    if (!isDeleted) {
      res.render("404", { message: "Contact Not Found" });
    }
    res.redirect("/");
  } catch (error) {
    res.render("505", { message: error });
  }
};
