require("dotenv").config(); // to access process.env object
const express = require("express");
const mongoose = require("mongoose");
const workoutsRouter = require("./routes/workouts");
const userRoutes = require("./routes/user");

// express app
const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts", workoutsRouter);
app.use("/api/user", userRoutes);

// db connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(5000, () => {
      console.log("Listening on: http://localhost:5000");
    });
  })
  .catch((error) => {
    console.log(error);
  });

// ! mongoose atlas
// https://cloud.mongodb.com/v2/65f18e2c2739a742d9b9324f#/metrics/replicaSet/65ff7e1ad2e76a0f86598e1e/explorer/test/workouts/find
