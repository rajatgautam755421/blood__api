const ContactModel = require("../Models/ContactModel");

const router = require("express").Router();

router.post("/contact", async (req, res) => {
  const response = await ContactModel.create(req.body);
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

router.get("/contact", async (req, res) => {
  const response = await ContactModel.find({}).sort({ createdAt: -1 });
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
