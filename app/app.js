/*
----- Developers info -----
Dev1 name: Anastasia Hamandritov
Dev1 ID: 321924433

Dev2 name: Shirel Bitan
Dev2 ID: 209322395
 */

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
const db = mongoose.connection;
const bodyParser = require("body-parser");

// Mongo Connection
const connectionString =
  "mongodb+srv://nasthg96:fET8ns9HlgYnFt6B@cost-management-db.nmlivoc.mongodb.net/costs-db";

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Mongo Error handling
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// view engine setup
app.set("view engine", "jade");
app.set("views", __dirname + "/views");

// Routes
const indexRouter = require("./routes/index");
const addCostRouter = require("./routes/addcost");
const createReportRouter = require("./routes/createReport");
const reportRouter = require("./routes/report");
const aboutRouter = require("./routes/about");
const addUserRouter = require("./routes/adduser");

app.use("/", indexRouter);
app.use("/addcost", addCostRouter);
app.use("/create-report", createReportRouter);
app.use("/report", reportRouter);
app.use("/about", aboutRouter);
app.use("/adduser", addUserRouter);

// Other configurations
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = { app, mongoose };
