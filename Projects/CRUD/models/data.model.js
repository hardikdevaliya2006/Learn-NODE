import mongoose from "mongoose";

const dataSchema = mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
});

const Data = mongoose.model("data", dataSchema, "data");

export default Data