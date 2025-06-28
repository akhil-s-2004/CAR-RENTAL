const mongoose = require('mongoose');
const feedbackSchema = new mongoose.Schema({
  user_id: mongoose.Schema.Types.ObjectId,
  content: String,
  rating: Number,
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Feedback', feedbackSchema);