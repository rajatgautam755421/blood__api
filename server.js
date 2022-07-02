const express = require("express");
require("./connection");
const app = express();
const logger = require("morgan");
const cors = require("cors");
//Initializing dotenv
require("dotenv").config();
app.use(express.json());
app.use(logger("dev"));
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    status: "Success",
    msg: "Home Page",
  });
});

const DonationRoute = require("./Routes/DonationRoute");
const ContactRoute = require("./Routes/ContactRoute");
const adminRoute = require("./Routes/AdminRoute");
const HospitalRoute = require("./Routes/HospitalRoute");
const buyRoute = require("./Routes/BuyRoute");
const requestRoute = require("./Routes/RequestRoute");

app.use("/api/v1", DonationRoute);
app.use("/api/v1", ContactRoute);
app.use("/api/v1", HospitalRoute);
app.use("/api/v1", adminRoute);
app.use("/api/v1", buyRoute);
app.use("/api/v1", requestRoute);

app.listen(4000, () => {
  console.log("Server Is Listening At 4000");
});
