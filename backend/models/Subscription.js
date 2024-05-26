const mongoose = require('mongoose');

const SubscriptionSchema = new mongoose.Schema({
    customer_id: String,
    box_size: Number,
    selected_meals: [mongoose.Schema.Types.ObjectId],
});

module.exports = mongoose.model('Subscription', SubscriptionSchema);
