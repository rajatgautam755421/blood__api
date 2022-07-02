const RequestModel = require("../Models/RequestModel");
const { sendMail } = require("../Helper/Mail");

const router = require("express").Router();

router.post("/request", async (req, res) => {
  const response = await RequestModel.create(req.body);
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

router.get("/request", async (req, res) => {
  const response = await RequestModel.find({}).sort({ createdAt: -1 });
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

router.put("/update/:id/:isApproved", async (req, res) => {
  const { id, isApproved } = req.params;
  const user = await RequestModel.findById({ _id: id });
  const response = await RequestModel.findByIdAndUpdate(
    { _id: id },
    { isApproved },
    { new: true, runValidators: true }
  );
  try {
    sendMail(user.email, user.bloodGroup);
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
