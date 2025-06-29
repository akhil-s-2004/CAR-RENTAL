const Account = require('../models/Account');
const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });
};

exports.register = async (req, res) => {
  try {
    const account = new Account(req.body);
    await account.save();
    const token = generateToken(account);
    res.status(201).json(account);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const account = await Account.findOne({ email, password_hash: password });
  if (account) {
    const token = generateToken(account);
    res.json({ account, token });
  }
  else res.status(401).json({ error: 'Invalid credentials' });
};

exports.getAccount = async (req, res) => {
  const account = await Account.findById(req.params.id);
  res.json(account);
};
exports.getCurrentUser = async (req, res) => {
  const account = await Account.findById(req.user.id);
  res.json(account);
};
exports.updateAccount = async (req, res) => {
  const updatedAccount = await Account.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedAccount);
};
