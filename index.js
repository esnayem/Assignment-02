const express = require("express");
const mongoose = require("mongoose");

const dishRouter = require("./routes/dishRouter");
const promoRouter = require("./routes/promoRouter");
const leaderRouter = require("./routes/leaderRouter");

const MONGO_STRING = "mongodb://0.0.0.0:27017/nodeApp";
mongoose
  .connect(MONGO_STRING)
  .then(() => {
    console.log("Connection With Mongo has been established...");
  })
  .catch((err) => {
    console.log("There is an Error");
    console.log(err);
  });

const app = express();

app.use(express.json());

app.use("/dishes", dishRouter);
app.use("/promotions", promoRouter);
app.use("/leaders", leaderRouter);

app.listen(3000, () => {
  console.log("Listening on port 3000....");
});
