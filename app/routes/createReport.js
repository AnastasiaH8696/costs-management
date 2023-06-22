/*
----- Developers info -----
Dev1 name: Anastasia Hamandritov
Dev1 ID: 321924433

Dev2 name: Shirel Bitan
Dev2 ID: 209322395
 */

const express = require('express');
const router = express.Router();

/* GET Cost Report Form */
router.get('/', async (req, res, next) => {
  res.render('report');
});


module.exports = router;