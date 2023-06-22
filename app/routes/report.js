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
const categories = require("../consts/categories");

router.get("/", async (req, res) => {
  try {
    const userId = Number(req.query.userId);
    const month = Number(req.query.month);
    const year = Number(req.query.year);
    const report = {};

    //Initialize response json
    categories.forEach(category => {
      report[category] = [];
    });

    //Validations
    if (!userId || !month || !year) {
      throw new Error("One ore more of the required parameters are empty");
    }

    if (month < 1 || month > 12) {
      throw new Error("Invalid Month. Must be between 1-12");
    }

    if (year < 1923 || year > 2023) {
      throw new Error("Invalid Year. Must be between 1923-2023");
    }

    costs
      .find({ user_id: userId, year: year, month: month }) //Find specific user
      .then((items) => {
        items.forEach((item) => {
          const { category, day, description, sum, year } = item;
          const data = {
            day: day,
            description: description,
            sum: sum
          }
          report[category].push(data);
        });
        res.json(report);
      })
      .catch((error) => {
        console.error("Error finding items:", error);
      });
  } catch (err) {
    console.error(err);
    res.status(400).send("Error retrieving report, the error: " + err);
  }
});

module.exports = router;
