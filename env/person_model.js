let mongoose = require("mongoose");
let person = new mongoose.Schema({

    name: String,
    age: Number,
    favoriteFoods: [String]
})
module.exports = mongoose.model('person_property', person);