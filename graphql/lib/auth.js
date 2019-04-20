const { AuthenticationError } = require('apollo-server-express');

module.exports = Authenticator = next => (parent, args, ctx, info) => {
  console.log("ctx=========-", ctx);
  if (!ctx.id) throw new AuthenticationError("You are not authenticated");
  return next(parent, args, ctx, info);
};