const CompanyDealerDetails = require('../models/CompanyDealerDetails');

exports.addCompanyDetails = async (req, res) => {
  const details = new CompanyDealerDetails(req.body);
  await details.save();
  res.status(201).json(details);
};

exports.getCompanyDetails = async (req, res) => {
  const details = await CompanyDealerDetails.findOne({ dealer_id: req.params.dealerId });
  res.json(details);
};
