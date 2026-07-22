export function mapForecast(apiData) {
  if (!apiData?.municipio || !apiData?.stateSky) {
    throw new Error("Invalid weather data");
  }

  return {
    id: apiData.municipio.CODIGOINE.slice(0, 5),
    city: apiData.municipio.NOMBRE,
    condition: apiData.stateSky.description,
    temperature: Number(apiData.temperatura_actual),
  };
}
