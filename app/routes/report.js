/*
----- Developers info -----
Dev1 name: Anastasia Hamandritov
Dev1 ID: 321924433

Dev2 name: Shirel Bitan
Dev2 ID: 209322395
 */

const express = require("express");
const router = express.Router();
const costs = require("../schemas/costs");

router.get("/", async (req, res) => {
  try {
    const userId = req.params.user_id;
    const month = req.params.month;
    const year = req.params.year;

    if (!userId || !month || !year) {
      throw new Error("One ore more of the required parameters are empty");
    }

    if (!Number.isInteger(month) || month < 1 || month > 12) {
      throw new Error("The month is invalid");
    }

    if (!Number.isInteger(year)) {
      throw new Error("The year is invalid");
    }

    
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving report");
  }

  res.send("Success");
});

module.exports = router;
