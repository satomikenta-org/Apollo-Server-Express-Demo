const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    me: User,
    getMyPosts: [Post],
    getAllPosts: [Post],
  }

  type Mutation {
    createPost(title: String!): Post!,
  }

  type User {
    id: ID!,
    name: String!,
    email: String!
  }

  type Post {
    id: ID!,
    title: String!,
    author: User!
  }
`

module.exports = typeDefs;