const { Schema, model } = require("mongoose");

const hospitalSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name Is Required"],
      trim: true,
    },
    address: {
      type: String,
      required: [true, "Address Is Required"],
      trim: true,
    },
    cName: {
      type: String,
      required: [true, "cName Is Required"],
      trim: true,
    },

    sDate: {
      type: String,
      required: [true, "sDate Is Required"],
      trim: true,
    },
    eDate: {
      type: String,
      required: [true, "eDate Is Required"],
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = new model("HospitalModel", hospitalSchema);
