const { AuthenticationError } = require('apollo-server-express');
const Services = require('../services');

const resolvers = {
  Query: {
    me: async (parent, args, { id }) => {
      if (!id) throw new AuthenticationError("Not Auth"); // Must Create Auth_HOF to avoid writing same logic.
      return await Services.User.findOneById(id);
    },
    getAllPosts: async () => await Services.Post.getAll(),
    getMyPosts: async (parent, args, { id }) => {
      if (!id) throw new AuthenticationError("Not Auth");
      return await Services.Post.findByAuthorId(id)
    }
  },
  Mutation: {
    createPost: async (parent, { title }, { id }) => {
      if (!id) throw new AuthenticationError("Not Auth");
      const post = await Services.Post.create(title, id);
      if (!post) throw new Error('Failed to Create Post');
      return post;
    },
  },
  Post: {
    author: async (parent, args, ctx) => await Services.User.findOneById(ctx.id)
  }
}

module.exports = resolvers;