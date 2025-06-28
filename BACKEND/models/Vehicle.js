const mongoose = require('mongoose');
const vehicleSchema = new mongoose.Schema({
  dealer_id: mongoose.Schema.Types.ObjectId,
  brand: String,
  model: String,
  type: String,
  seats: Number,
  rate_per_day: Number,
  image_url: String,
  availability: Boolean
});

module.exports = mongoose.model('Vehicle', vehicleSchema);
