import gql from "graphql-tag";

export const GET_CURRENCIES_QUERY = gql`
  {
    currencies: getCurrencies {
      id
      currency
      name
      logo_url
      rank
      price
    }
  }
`;
