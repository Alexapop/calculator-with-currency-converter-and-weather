import axios from "axios";
import { mapForecast } from "../mappers/forecastMapper.js";

const WEATHER_API_URL = "https://api.el-tiempo.net/json/v3";
const ASTURIAS_CODE = "33";

const MUNICIPALITY_CODES = ["33044", "33024", "33004", "33076", "33066"];

export async function getAsturiasForecast() {
  const requests = MUNICIPALITY_CODES.map((municipalityCode) =>
    axios.get(
      `${WEATHER_API_URL}/provincias/${ASTURIAS_CODE}/municipios/${municipalityCode}`,
    ),
  );

  const responses = await Promise.all(requests);

  return responses.map((response) => mapForecast(response.data));
}
