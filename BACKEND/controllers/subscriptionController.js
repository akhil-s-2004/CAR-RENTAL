const SubscriptionPlan = require('../models/SubscriptionPlan');
const UserSubscription = require('../models/UserSubscription');

exports.createPlan = async (req, res) => {
  const plan = new SubscriptionPlan(req.body);
  await plan.save();
  res.status(201).json(plan);
};

exports.getAllPlans = async (req, res) => {
  const plans = await SubscriptionPlan.find();
  res.json(plans);
};

exports.subscribeUser = async (req, res) => {
  const subscription = new UserSubscription(req.body);
  await subscription.save();
  res.status(201).json(subscription);
};

exports.getUserSubscriptions = async (req, res) => {
  const subscriptions = await UserSubscription.find({ userId: req.params.userId });
  res.json(subscriptions);
};