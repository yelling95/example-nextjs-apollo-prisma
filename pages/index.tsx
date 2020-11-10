import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { Sign } from '../src/components'

const Home = () => {
  const client = new ApolloClient({
    uri: 'http://localhost:3000/api/graphql',
    cache: new InMemoryCache()
  })

  return (
    <ApolloProvider client={client}>
      <div>
        <h1>로그인</h1>
        <Sign />
      </div>
    </ApolloProvider>
  )
}
export default Home
