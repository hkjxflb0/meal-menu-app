const mongoose = require('mongoose');

const MealSchema = new mongoose.Schema({
    name: String,
    category: String,
    substitute: mongoose.Schema.Types.ObjectId,
    week: Number,
});

module.exports = mongoose.model('Meal', MealSchema);
