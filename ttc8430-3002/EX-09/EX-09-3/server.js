const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://AA4495:matalasi4444@cluster0.w4tsmbv.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const typeDefs = gql`
  type Album {
    _id: ID!
    title: String!
    artist: String!
    year: Int!
  }

  type Query {
    albums: [Album!]!
    album(id: ID!): Album
  }

  type Mutation {
    createAlbum(title: String!, artist: String!, year: Int!): Album!
    updateAlbum(id: ID!, title: String, artist: String, year: Int): Album!
    deleteAlbum(id: ID!): Album
  }
`;

const resolvers = {
  Query: {
    albums: async () => {
      return await Album.find();
    },
    album: async (parent, args) => {
      return await Album.findById(args.id);
    }
  },
  Mutation: {
    createAlbum: async (parent, args) => {
      const album = new Album(args);
      await album.save();
      return album;
    },
    updateAlbum: async (parent, args) => {
      const { id, ...data } = args;
      const album = await Album.findByIdAndUpdate(id, data, { new: true });
      return album;
    },
    deleteAlbum: async (parent, args) => {
      const album = await Album.findByIdAndDelete(args.id);
      return album;
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
);

