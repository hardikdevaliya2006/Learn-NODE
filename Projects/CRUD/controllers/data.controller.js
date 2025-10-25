import Data from "../models/data.model.js";

export const getAllData = async (req, res) => {
  const dataList = await Data.find();
  res.render("home", { dataList });
};

export const getDetailedData = async (req, res) => {
  const requestedData = await Data.findById(req.params.id);
  res.render("show-data", { requestedData });
};

export const addDataPage = (req, res) => {
  res.render("add-data");
};

export const addData = async (req, res) => {
  await Data.create(req.body);
  res.redirect("/");
};

export const updateDataPage = async (req, res) => {
  const requestedData = await Data.findById(req.params.id);
  res.render("update-data", { requestedData });
};

export const updateData = async (req, res) => {
  await Data.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/");
};

export const deleteData = async (req, res) => {
  await Data.findByIdAndDelete(req.params.id);
  res.redirect("/");
};
