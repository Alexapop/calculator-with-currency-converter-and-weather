import axios from "axios";
import { mapCurrencyRates } from "../mappers/currencyMapper.js";

export async function getExchangeRates() {
  const API_KEY = import.meta.env.VITE_CURRENCY_FREAKS_API_KEY;
  const URL = "https://api.currencyfreaks.com/v2.0/rates/latest";

  const response = await axios.get(URL, {
    params: {
      apikey: API_KEY,
      symbols: "EUR,USD,JPY",
    },
  });

  return mapCurrencyRates(response.data);
}
