const HospitalModel = require("../Models/HospitalModel");

const router = require("express").Router();

router.post("/hospital", async (req, res) => {
  const response = await HospitalModel.create(req.body);
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

router.get("/hospital", async (req, res) => {
  const response = await HospitalModel.find({}).sort({ createdAt: -1 });
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
router.delete("/hospitals/:id", async (req, res) => {
  const { id } = req.params;
  const response = await HospitalModel.findByIdAndRemove({ _id: id });
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
