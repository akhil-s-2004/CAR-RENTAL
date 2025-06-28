const Document = require('../models/Document');

exports.uploadDocument = async (req, res) => {
  const document = new Document(req.body);
  await document.save();
  res.status(201).json(document);
};

exports.getAllDocuments = async (req, res) => {
  const docs = await Document.find();
  res.json(docs);
};

exports.getDocument = async (req, res) => {
  const doc = await Document.findById(req.params.id);
  res.json(doc);
};

exports.verifyDocument = async (req, res) => {
  const updated = await Document.findByIdAndUpdate(req.params.id, { is_verified: true }, { new: true });
  res.json(updated);
};
