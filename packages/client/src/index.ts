import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
import errorLink from "./links/errorLink";

const httpLink = new HttpLink({
  uri: "http://localhost:4000/",
});

const client = new ApolloClient({
  link: from([errorLink, httpLink]),
  cache: new InMemoryCache(),
});

export default client;
