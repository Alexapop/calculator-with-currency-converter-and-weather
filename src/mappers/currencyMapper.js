export function mapCurrencyRates(apiData) {
  if (!apiData?.rates) {
    throw new Error("Invalid currency API response");
  }

  const rates = {
    EUR: Number(apiData.rates.EUR),
    USD: Number(apiData.rates.USD),
    JPY: Number(apiData.rates.JPY),
  };

  const hasInvalidRate = Object.values(rates).some(
    (rate) => !Number.isFinite(rate) || rate <= 0,
  );

  if (hasInvalidRate) {
    throw new Error("Currency API returned invalid rates");
  }

  return rates;
}
