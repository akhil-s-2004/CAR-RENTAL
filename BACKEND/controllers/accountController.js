const Account = require('../models/Account');

exports.register = async (req, res) => {
  try {
    const account = new Account(req.body);
    await account.save();
    res.status(201).json(account);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const account = await Account.findOne({ email, password_hash: password });
  if (account) res.json(account);
  else res.status(401).json({ error: 'Invalid credentials' });
};

exports.getAccount = async (req, res) => {
  const account = await Account.findById(req.params.id);
  res.json(account);
};

exports.updateAccount = async (req, res) => {
  const updatedAccount = await Account.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedAccount);
};
