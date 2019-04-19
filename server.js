const express = require('express');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./graphql/typeDefs.js');
const resolvers = require('./graphql/resolvers.js');
const context = require('./graphql/context.js');

const port = process.env.PORT || 4000;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/auth', require('./routes/auth'));

const server = new ApolloServer({ 
  typeDefs, 
  resolvers, 
  context
});

server.applyMiddleware({app});

app.listen({port}, () => {
  console.log(`Server listenin on port ${port}`);
});

// A Error thrown in ApolloServer can be handled BY ApolloClient( 'onError' ) in Front_End.  