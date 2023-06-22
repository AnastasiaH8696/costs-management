/*
----- Developers info -----
Dev1 name: Anastasia Hamandritov
Dev1 ID: 321924433

Dev2 name: Shirel Bitan
Dev2 ID: 209322395
 */

const express = require("express");
const router = express.Router();

/* GET render addCost view */
router.get("/", function (req, res, next) {
  res.render("addcost");
});

/* POST new cost item */
router.post("/", async (req, res, next) => {
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

  const savedCost = await newCost.save();
});

module.exports = router;
