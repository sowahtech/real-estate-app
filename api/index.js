const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const userRouter = require("./routes/user.route.js");
const authRouter = require("./routes/auth.route.js");
const cors = require("cors");

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected to mongodb successfully");
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();

app.use(cors());

app.use(express.json());

app.listen(5000, () => {
  console.log("server started successfully on port 5000 and i say hurray");
});

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "POST, PUT, PATCH, DELETE");

  next();
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "internal server error";
  return res.status(statusCode).json({
    success: "failed",
    statusCode,
    message,
  });
});
