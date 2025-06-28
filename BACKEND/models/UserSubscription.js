const mongoose = require('mongoose');
const userSubscriptionSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  planId: mongoose.Schema.Types.ObjectId,
  start_date: Date,
  end_date: Date
});

module.exports = mongoose.model('UserSubscription', userSubscriptionSchema);