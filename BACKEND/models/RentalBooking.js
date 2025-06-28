const mongoose = require('mongoose');
const rentalBookingSchema = new mongoose.Schema({
  user_id: mongoose.Schema.Types.ObjectId,
  vehicle_id: mongoose.Schema.Types.ObjectId,
  start_date: Date,
  end_date: Date,
  total_cost: Number,
  status: String
});

module.exports = mongoose.model('RentalBooking', rentalBookingSchema);