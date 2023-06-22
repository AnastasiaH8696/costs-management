/*
----- Developers info -----
Dev1 name: Anastasia Hamandritov
Dev1 ID: 321924433

Dev2 name: Shirel Bitan
Dev2 ID: 209322395
 */

const mongoose = require("mongoose");
const { Schema } = mongoose;

const usersSchema = new Schema({
    id: Number,
    first_name: String,
    last_name: String,
    birthday: Date
});

const User = mongoose.model('users', usersSchema);

module.exports = usersSchema;
