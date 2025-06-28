const Feedback = require('../models/Feedback');

exports.addFeedback = async (req, res) => {
  const feedback = new Feedback(req.body);
  await feedback.save();
  res.status(201).json(feedback);
};

exports.getAllFeedback = async (req, res) => {
  const feedbacks = await Feedback.find();
  res.json(feedbacks);
};

exports.getFeedback = async (req, res) => {
  const feedback = await Feedback.findById(req.params.id);
  res.json(feedback);
};
