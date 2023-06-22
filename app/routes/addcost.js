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

/* GET render addCost view */
router.get("/", function (req, res, next) {
  res.render("addcost");
});

/* POST new cost item */
router.post("/", async (req, res, next) => {
  /*console.log(req);
  const { id, user_id, year, month, day, description, category, sum } =
    req.body;

  const newCost = new costs({
    id,
    user_id,
    year,
    month,
    day,
    description,
    category,
    sum,
  });

  const savedCost = await newCost.save();*/

  try {
    const newCost = new costs(req.body);
    await newCost.save();
    res.send("Cost item added successfully");
  } catch (error) {
    console.error("Error adding cost item:", error);
    res.status(500).send("An error occurred while adding the cost item");
  }
});

module.exports = router;
