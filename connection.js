const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://bloodbank:12345@cluster0.l8igb8n.mongodb.net/",
  (err) => {
    if (!err) {
      console.log("connected to database 😂");
    } else {
      console.log(err);
    }
  }
);
