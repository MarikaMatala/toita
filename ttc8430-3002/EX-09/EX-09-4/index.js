const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const { connectDB } = require('./data-source');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({}),
});

connectDB().then(() => {
  server.listen().then(({ url }) => {
    console.log(`
