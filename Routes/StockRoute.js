const StockModel = require("../Models/StockModel");

const router = require("express").Router();

router.post("/stock", async (req, res) => {
  console.log(req.body);
  const response = await StockModel.create(req.body);
  console.log(response);
  try {
    res.status(200).json({
      status: "Success",
      msg: response,
    });
  } catch (error) {
    res.status(500).json({
      status: "Failure",
      msg: error.message,
    });
  }
});

router.get("/stock/:bg", async (req, res) => {
  const { bg } = req.params;
  const response = await StockModel.find({ bg }).sort({ createdAt: -1 }).exec();
  try {
    res.status(200).json({
      status: "Success",
      msg: response,
    });
  } catch (error) {
    res.status(500).json({
      status: "Failure",
      msg: error.message,
    });
  }
});

module.exports = router;
