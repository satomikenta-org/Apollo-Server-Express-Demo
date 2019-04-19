require('dotenv').config();
const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET;

const context = async ({ req }) => {
  try {
    const token = req.headers.authorization;
    if (!token) return {};
    const decoded = await jwt.verify(token, SECRET);
    return { id: decoded.id, name: decoded.name };
  } catch (err) {
    return {};
  }
};

module.exports = context;