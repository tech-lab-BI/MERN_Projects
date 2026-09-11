const jwt = require("jsonwebtoken");
require("dotenv").config();
function authMiddleware(req, res, next) {
  const token = req.headers.authorization;
  const payload = jwt.verify(token, process.env.JWT_TOKEN);
  if (!payload) {
    res.json({ msg: "token validation failed" });
  }
  next();
}
module.exports = authMiddleware;
