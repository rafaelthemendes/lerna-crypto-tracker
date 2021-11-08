import Nomics from "nomics";
import { Resolvers } from "./@types/graphql-schema";
import { currencyMapper } from "./mappers";

const nomics = new Nomics({
  apiKey: process.env.NOMICS_API_KEY || "",
});

const resolvers: Resolvers = {
  Query: {
    getCurrencies: async (_, { size }) => {
      const currencies = await nomics.currenciesTicker();
      return currencies.slice(0, size).map(currencyMapper);
    }
  },
};

export default resolvers;
