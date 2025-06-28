const express = require('express');
const router = express.Router();
const companyDealerController = require('../controllers/companyDealerController');

router.post('/', companyDealerController.addCompanyDetails);
router.get('/:dealerId', companyDealerController.getCompanyDetails);

module.exports = router;
