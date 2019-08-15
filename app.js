const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const router = require("./routes");

// MongoDB settings using mongoose
const db = mongoose.connection;
db.on("error", console.error);
db.once("open", () => {
  console.log("Connected to mongod server.");
});
mongoose.connect("mongodb://localhost/mongodb_tutorial");

// Post body settings
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Router settings
app.use("/", router);

// Server settings
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log("Express server has started on port " + port);
});
