const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');
const { authenticateJWT } = require('../middleware/authMiddleware');
router.post('/register', accountController.register);
router.post('/login', accountController.login);
router.get('/me', authenticateJWT, accountController.getCurrentUser);
router.get('/:id', authenticateJWT, accountController.getAccount);
router.put('/:id', authenticateJWT, accountController.updateAccount);
router.post('/logout', authenticateJWT, accountController.logout);

module.exports = router;