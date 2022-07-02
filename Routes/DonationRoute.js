const DonationModel = require("../Models/DonationModel");

const router = require("express").Router();

router.post("/donation", async (req, res) => {
  const response = await DonationModel.create(req.body);
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

router.get("/all/donations", async (req, res) => {
  const response = await DonationModel.find({}).sort({ createdAt: -1 });
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

router.get("/donations/:group", async (req, res) => {
  const { group } = req.params;
  const response = await DonationModel.find({ bloodGroup: group }).sort({
    createdAt: -1,
  });
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

router.get("/find/:id", async (req, res) => {
  const { id } = req.params;
  const response = await DonationModel.findById({ _id: id }).sort({
    createdAt: -1,
  });
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

router.get("/find/address/group", async (req, res) => {
  const { bloodGroup, address } = req.body;
  const Regex1 = new RegExp(address, "i");
  const Regex2 = new RegExp(bloodGroup, "i");
  try {
    const response = await DonationModel.find({
      $and: [{ address: Regex1 }, { bloodGroup: Regex2 }],
    });
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
