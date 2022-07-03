const { Schema, model } = require("mongoose");

const stockSchema = new Schema(
  {
    bg: {
      type: String,
      required: true,
      trim: true,
    },
    amount: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = new model("StockModel", stockSchema);
