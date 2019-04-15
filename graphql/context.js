const { AuthenticationError } = require('apollo-server-express');
const jwt = require('jsonwebtoken');
const JWT_SECRET_KEY = "SUPERSECRET";

const context = ({ req }) => {
  try {
    const authorization = req.headers.authorization;
    // if ( !authorization ) return undefined;
    const user = { id: 1, name: "satomi"}; // for test.
    if (!authorization) return user;
    
    const token = authorization.split(' ')[1];
    const decoded = jwt.verify(token, JWT_SECRET_KEY);
    return { loggedInUser: decoded.username };

  } catch (error) {
    console.log(error);
    throw new AuthenticationError('invalid token');
  }
};

module.exports = context;