const router = require("express").Router();

router.get("/buy", async (req, res) => {
  res.send("Buy");
});

module.exports = router;
