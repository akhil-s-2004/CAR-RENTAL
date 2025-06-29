const jwt = require('jsonwebtoken');

exports.authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) return res.sendStatus(403);  // You’re getting this
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401); // No token provided
  }
};
