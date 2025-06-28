const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  phone: String,
  password_hash: String,
  address: String,
  role: { type: String, enum: ['user', 'dealer', 'admin'], default: 'user' },
  subscription_status: String,
  eco_points: Number,
  is_verified: Boolean,
  agreed_to_terms: Boolean,
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Account', accountSchema);