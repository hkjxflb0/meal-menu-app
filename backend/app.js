const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/meal-menu-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Models
const Meal = mongoose.model('Meal', new mongoose.Schema({
  name: String,
  category: String,
  week: Number
}));

const Subscription = mongoose.model('Subscription', new mongoose.Schema({
  customer_id: String,
  box_size: Number,
  selected_meals: [String]
}));

// Routes
app.get('/api/meals', async (req, res) => {
  const meals = await Meal.find();
  res.json(meals);
});

app.post('/api/subscriptions', async (req, res) => {
  const subscription = new Subscription(req.body);
  await subscription.save();
  res.json({ message: 'Subscription successful' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
