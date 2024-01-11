const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const userRouter = require("./routes/user.route.js");

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected to mongodb successfully");
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();

app.listen(5000, () => {
  console.log("server started successfully on port 5000 and i say hurray");
});

app.use("/api/user", userRouter);
