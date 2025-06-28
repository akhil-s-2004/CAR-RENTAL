const RentalBooking = require('../models/RentalBooking');

exports.createBooking = async (req, res) => {
  const booking = new RentalBooking(req.body);
  await booking.save();
  res.status(201).json(booking);
};

exports.getAllBookings = async (req, res) => {
  const bookings = await RentalBooking.find();
  res.json(bookings);
};

exports.getBooking = async (req, res) => {
  const booking = await RentalBooking.findById(req.params.id);
  res.json(booking);
};

exports.updateBooking = async (req, res) => {
  const updated = await RentalBooking.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

exports.cancelBooking = async (req, res) => {
  await RentalBooking.findByIdAndDelete(req.params.id);
  res.json({ message: 'Booking cancelled' });
};