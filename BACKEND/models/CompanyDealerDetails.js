const mongoose = require('mongoose');
const companyDealerSchema = new mongoose.Schema({
  dealer_id: mongoose.Schema.Types.ObjectId,
  company_name: String,
  company_address: String,
  gst_number: String,
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('CompanyDealerDetails', companyDealerSchema);
