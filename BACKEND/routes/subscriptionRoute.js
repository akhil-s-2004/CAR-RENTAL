const express = require('express');
const router = express.Router();
const subscriptionController = require('../controllers/subscriptionController');

router.post('/plans', subscriptionController.createPlan);
router.get('/plans', subscriptionController.getAllPlans);
router.post('/user-subscriptions', subscriptionController.subscribeUser);
router.get('/user-subscriptions/:userId', subscriptionController.getUserSubscriptions);

module.exports = router;