const { AuthenticationError } = require('apollo-server-express');
const jwt = require('jsonwebtoken');
const JWT_SECRET_KEY = "SUPERSECRET";

const context = ({ req }) => {
  try {
    const user = { id: 1, name: "satomi"};
    return {user}; // fot testing

    const authorization = req.headers.authorization;
    if (!authorization) return undefined; 

    const token = authorization.split(' ')[1];
    const decoded = jwt.verify(token, JWT_SECRET_KEY);
    return { loggedInUser: decoded.username };

  } catch (error) {
    console.log(error);
    throw new AuthenticationError('invalid token');
  }
};

module.exports = context;