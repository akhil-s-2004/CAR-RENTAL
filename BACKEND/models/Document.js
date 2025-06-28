const mongoose = require('mongoose');
const documentSchema = new mongoose.Schema({
  user_id: mongoose.Schema.Types.ObjectId,
  type: String,
  file_url: String,
  is_verified: Boolean
});

module.exports = mongoose.model('Document', documentSchema);