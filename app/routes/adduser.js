/*
----- Developers info -----
Dev1 name: Anastasia Hamandritov
Dev1 ID: 321924433

Dev2 name: Shirel Bitan
Dev2 ID: 209322395
 */

const express = require("express");
const router = express.Router();
const users = require("../schemas/users");

// Body parser - The imports are here because if it is configured at app.js then when using html form the req.body returns undefined
router.use(express.json());
router.use(express.urlencoded());

/* GET render addCost view */
router.get("/", async (req, res, next) => {
  res.render("adduser");
});

/* POST new cost item */
router.post("/", async (req, res, next) => {
  try {
    const { id, first_name, last_name, birthday } = req.body;

    //Validations
    const user = await users.findOne({ id: id });
    if (user) {
      console.log(user);
      throw new Error("User already exists");
    }

    //Adding new cost
    const newUser = new users({ id, first_name, last_name, birthday });
    await newUser.save();
    res.send("User was added successfully");
  } catch (error) {
    console.error("Error adding user:", error);
    res
      .status(400)
      .send("An error occurred while adding user, error: " + error);
  }
});

module.exports = router;
