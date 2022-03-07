import './App.css';
import React from 'react';
import {ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Layout from './components/Layout'

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
});

const App = () => {
 
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h4>App</h4>
          <Layout />
      </div>
    </ApolloProvider>
  );
}

export default App;
