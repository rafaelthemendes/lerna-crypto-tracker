import { gql } from "apollo-server";

const typeDefs = gql`
  type Currency {
    id: String!
    currency: String!
    name: String
    logo_url: String
    rank: String
    price: String!
  }
  type Query {
    getCurrencies(size: Int = 30): [Currency]
  }
`;

export default typeDefs;
