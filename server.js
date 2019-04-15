const express = require('express');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./graphql/typeDefs.js');
const resolvers = require('./graphql/resolvers.js');
const context = require('./graphql/context.js');

const port = process.env.PORT || 4000;
const app = express();

app.use(cors());
app.use('/auth', require('./routes/auth/index.js'));

const server = new ApolloServer({ 
  typeDefs, 
  resolvers, 
  context
});

server.applyMiddleware({app});

app.listen({port}, () => {
  console.log(`Server listenin on port ${port}`);
});