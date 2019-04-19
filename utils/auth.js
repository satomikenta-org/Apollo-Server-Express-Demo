require('dotenv').config();
const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET;
const JWT_TTL = process.env.JWT_TTL;
console.log("JWT_TTL", JWT_TTL);

const genToken = async (id, name) => {
  const token = await jwt.sign({id, name}, SECRET, { expiresIn: JWT_TTL });
  return token;
};

module.exports = {
  genToken,
};