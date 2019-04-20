const Services = require('../services');
const Authenticator = require('./lib/auth');

const resolvers = {
  Query: {
    me: Authenticator( async (parent, args, ctx, info) => await Services.User.findOneById(ctx.id)),
    getAllPosts: Authenticator(async (parent, args, ctx, info) => {
      const posts = await Services.Post.getAll()
      if (!posts) throw new Error('Internal Server Error');
      return posts;
    }),
    getMyPosts: Authenticator( async (parent, args, ctx, info) => {
      const posts = await Services.Post.findByAuthorId(ctx.id)
      if (!posts) throw new Error('Internal Server Error');
      return posts;
    })
  },
  Mutation: {
    createPost: Authenticator(async (parent, args, ctx, info) => {
      const post = await Services.Post.create(args.title, ctx.id);
      if (!post) throw new Error('Failed to Create Post');
      return post;
    }),
  },
  Post: {
    author: async (parent, args, ctx) => await Services.User.findOneById(ctx.id)
  }
}

module.exports = resolvers;