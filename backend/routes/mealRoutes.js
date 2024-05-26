const express = require('express');
const router = express.Router();
const Meal = require('../models/Meal');

router.get('/', async (req, res) => {
    const week = new Date().getWeek();
    try {
        const meals = await Meal.find({ week });
        res.json(meals);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
