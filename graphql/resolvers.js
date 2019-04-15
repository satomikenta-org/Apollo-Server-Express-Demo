const { AuthenticationError, ForbiddenError } = require('apollo-server-express');


const resolvers = {
  Query: {
    hello: (_, args, ctx) => {
      return ctx.name; // "satomi"
    }
  }
}

module.exports = resolvers;