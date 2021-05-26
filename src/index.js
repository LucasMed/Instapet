import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import { App } from './App'
import { API_GRAPHQL } from './constants'

const client = new ApolloClient({
  uri: API_GRAPHQL
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App /> 
  </ApolloProvider >,
  document.getElementById('app'))
