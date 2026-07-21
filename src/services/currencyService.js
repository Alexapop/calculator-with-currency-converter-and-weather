import axios from "axios"

export function getExchangeRates() {
    const API_KEY = import.meta.env.VITE_CURRENCY_FREAKS_API_KEY
    const URL = "https://api.currencyfreaks.com/v2.0/rates/latest"

    return axios.get(URL, {
        params: {
            apikey: API_KEY,
            symbols: "EUR,USD,JPY"
        }
    })

}
