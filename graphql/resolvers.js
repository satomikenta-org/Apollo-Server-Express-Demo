const resolvers = {
  Query: {
    hello: (_, args, ctx) => {
      return ctx.user.name;
    }
  }
}

module.exports = resolvers;