/*
----- Developers info -----
Dev1 name: Anastasia Hamandritov
Dev1 ID: 321924433

Dev2 name: Shirel Bitan
Dev2 ID: 209322395
 */

const express = require('express');
const router = express.Router();

/* GET About developers info */
router.get('/', function(req, res, next) {
  
  const data = [
    {
      firstname: 'Anastasia',
      lastname: 'Hamandritov',
      id: 321924433,
      email: 'nasthg96@gmail.com',
    },
    {
      firstname: 'Shirel',
      lastname: 'Bitan',
      id: 209322395,
      email: 'Shirelbitan277@gmail.com',
    },
  ];

  res.json(data);
});

module.exports = router;