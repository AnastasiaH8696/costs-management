/*
----- Developers info -----
Dev1 name: Anastasia Hamandritov
Dev1 ID: 321924433

Dev2 name: Shirel Bitan
Dev2 ID: 209322395
 */

const mongoose = require("mongoose");
const { Schema } = mongoose;

const costSchema = new Schema({
    id: Number,
    user_id: Number,
    year: Number,
    month: Number,
    day: Number,
    description: String,
    category: String,
    sum: Number
});

const Cost = mongoose.model('Cost', costSchema);

module.exports = Cost;
