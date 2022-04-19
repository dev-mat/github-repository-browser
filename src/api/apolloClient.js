import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { TOKEN } from './token'

const URI = "https://api.github.com/graphql"

const httpLink = createHttpLink({
  uri: URI
})

const authLink = setContext((_,{ headers }) => ({
  headers: {
    ...headers,
    authorization: "Bearer "+TOKEN
  }
}))

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

export { client }