const express = require('express');
const router = express.Router();
const Subscription = require('../models/Subscription');

router.post('/', async (req, res) => {
    const { customer_id, box_size, selected_meals } = req.body;
    const subscription = new Subscription({ customer_id, box_size, selected_meals });
    try {
        const newSubscription = await subscription.save();
        res.status(201).json(newSubscription);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
