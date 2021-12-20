import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

import '../styles/index.scss'

const client = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/erengonen/interview',
  cache: new InMemoryCache(),
})

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
