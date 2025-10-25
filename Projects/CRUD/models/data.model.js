import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2"

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

dataSchema.plugin(mongoosePaginate)

const Data = mongoose.model("data", dataSchema, "data");

export default Data