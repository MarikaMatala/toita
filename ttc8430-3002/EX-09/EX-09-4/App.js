import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo';

const DELETE_ALBUM_MUTATION = gql`
  mutation DeleteAlbum($id: ID!) {
    deleteAlbum(id: $id) {
      _id
      title
      artist
      year
    }
  }
`;


const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>Hello, world!</div>
    </ApolloProvider>
  );
}

export default App;

import React, { useState } from 'react';
import { useMutation } from 'react-apollo';

function App() {
  const [deleteAlbum] = useMutation(DELETE_ALBUM_MUTATION);

  const handleDelete = async (id) => {
    const result = await deleteAlbum({
      variables: { id },
      refetchQueries: [{ query: GET_ALBUMS_QUERY }]
    });
    console.log(result);
  };

  return (
    <ApolloProvider client={client}>
      <div>
        <button onClick={() => handleDelete('ALBUM_ID')}>Delete Album</button>
      </div>
    </ApolloProvider>
  );
}
const GET_ALBUMS_QUERY = gql`
  query GetAlbums {
    albums {
      _id
      title
      artist
      year
    }
  }
`;
function App() {
    const { loading, error, data } = useQuery(GET_ALBUMS_QUERY);
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error!</div>;
  
    const albums = data.albums;
  
    // rest of the code
  }
  const handleDelete = async (id) => {
    const result = await deleteAlbum({
      variables: { id },
      refetchQueries: [{ query: GET_ALBUMS_QUERY }]
    });
    console.log(result);
  };
  

