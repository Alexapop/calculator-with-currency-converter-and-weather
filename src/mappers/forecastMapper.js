const weatherConditions = [
  { keyword: "tormenta", label: "Thunderstorm", icon: "⛈️" },
  { keyword: "nieve", label: "Snow", icon: "❄️" },
  { keyword: "lluvia escasa", label: "Light rain", icon: "🌦️" },
  { keyword: "lluvia", label: "Rain", icon: "🌧️" },
  { keyword: "chubasco", label: "Showers", icon: "🌧️" },
  { keyword: "despejado", label: "Clear", icon: "☀️" },
  { keyword: "nubes altas", label: "High clouds", icon: "🌥️" },
  { keyword: "poco nuboso", label: "Partly cloudy", icon: "🌤️" },
  { keyword: "intervalos nubosos", label: "Partly cloudy", icon: "⛅" },
  { keyword: "muy nuboso", label: "Mostly cloudy", icon: "☁️" },
  { keyword: "cubierto", label: "Overcast", icon: "☁️" },
  { keyword: "nuboso", label: "Cloudy", icon: "☁️" },
];

function translateCondition(description) {
  const condition = description.toLowerCase();
  const translation = weatherConditions.find(({ keyword }) =>
    condition.includes(keyword),
  );

  return translation ?? { label: "Unknown", icon: "☁️" };
}

export function mapForecast(apiData) {
  if (!apiData?.municipio || !apiData?.stateSky) {
    throw new Error("Invalid weather data");
  }

  const condition = translateCondition(apiData.stateSky.description);

  return {
    id: apiData.municipio.CODIGOINE.slice(0, 5),
    city: apiData.municipio.NOMBRE,
    condition: condition.label,
    icon: condition.icon,
    temperature: Number(apiData.temperatura_actual),
  };
}
