const mongoose = require('mongoose');
const subscriptionPlanSchema = new mongoose.Schema({
  name: String,
  price: Number,
  duration_days: Number,
  features: [String]
});
module.exports = mongoose.model('SubscriptionPlan', subscriptionPlanSchema);