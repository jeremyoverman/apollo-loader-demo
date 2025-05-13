import {
  ApolloClient,
  createQueryPreloader,
  InMemoryCache,
} from "@apollo/client";

export const apollo = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

export const preloadQuery = createQueryPreloader(apollo);
