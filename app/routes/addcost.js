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
const users = require("../schemas/users");
const categories = require("../consts/categories");

// Body parser - The imports are here because if it is configured at app.js then when using html form the req.body returns undefined
router.use(express.json());
router.use(express.urlencoded());

/* GET render addCost view */
router.get("/", async (req, res, next) => {
  res.render("addcost");
});

/* POST new cost item */
router.post("/", async (req, res, next) => {
  try {
    const { id, year, month, day, sum, category, user_id, description } = req.body;

    //Validations
    if (Number(year) < 1923 || Number(year) > 2023) {
      throw new Error("Invalid Year. Must be between 1923-2023");
    }
    if (Number(month) < 1 || Number(month) > 12) {
      throw new Error("Invalid Month. Must be between 1-12");
    }
    if (Number(day) < 1 || Number(day) > 31) {
      throw new Error("Invalid Day. Must be between 1-31");
    }
    if (Number(sum) <= 0) {
      throw new Error("Invalid Sum. Must be bigger than 0");
    }
    if (!categories.includes(category)) {
      throw new Error("Invalid Category. The given category does not exist");
    }
    const user = await users.findOne({ id: user_id });
    if (!user) {
      throw new Error("User not found");
    }

    //Adding new cost
    const newCost = new costs({id, user_id, year, month, day, description, category, sum});
    await newCost.save();
    res.json(newCost);
    
  } catch (error) {
    console.error("Error adding cost item:", error);
    res
      .status(400)
      .send("An error occurred while adding the cost item, error: " + error);
  }
});

module.exports = router;
