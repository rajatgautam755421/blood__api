const router = require("express").Router();

router.post("/admin/login", async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  const user = "admin";
  const pass = "password";
  if (username === user && password === pass) {
    try {
      res.status(200).json({
        status: "Success",
        msg: "Successful",
      });
    } catch (error) {
      res.status(500).json({
        status: "Failure",
        msg: error.message,
      });
    }
  } else {
    res.status(400).json({
      status: "Failure",
      msg: "Username Or Password Is Incorrect.",
    });
  }
});

module.exports = router;
