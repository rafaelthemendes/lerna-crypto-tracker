import { IRawCurrencyTicker } from "nomics";
import { Currency } from "./@types/graphql-schema";

export const currencyMapper = (rawCurrency: IRawCurrencyTicker): Currency => ({
  id: rawCurrency.id,
  currency: rawCurrency.currency,
  name: rawCurrency.name,
  logo_url: rawCurrency.logo_url,
  rank: rawCurrency.rank,
  price: rawCurrency.price,
});
