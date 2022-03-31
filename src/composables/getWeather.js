import axios from "axios";
import { ref } from "vue";
import {
  errorHandle,
  getUrls,
  formatLocationStr,
  formatWeatherData,
} from "@/helpers";
import { geoLocationOptions } from "@/constants";

const getWeather = () => {
  const error = ref("");
  const location = ref("");
  const temperature = ref("");
  const precipitation = ref("");
  const humidity = ref("");
  const windSpeed = ref("");
  const snowDepth = ref("");
  const temperatureUnit = ref("");
  const precipitationUnit = ref("");
  const humidityUnit = ref("");
  const windSpeedUnit = ref("");
  const snowDepthUnit = ref("");

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const { weatherUrl, locationUrl } = getUrls(position);

      try {
        const { data: weatherData } = await axios.get(weatherUrl);
        const { data: locationData } = await axios.get(locationUrl);

        const {
          temperatureData,
          temperatureUnitData,
          precipitationData,
          precipitationUnitData,
          humidityData,
          humidityUnitData,
          windSpeedData,
          windSpeedUnitData,
          snowDepthData,
          snowDepthUnitData,
        } = formatWeatherData(weatherData);

        location.value = formatLocationStr(locationData);
        temperature.value = temperatureData;
        precipitation.value = precipitationData;
        humidity.value = humidityData;
        windSpeed.value = windSpeedData;
        snowDepth.value = snowDepthData;
        temperatureUnit.value = temperatureUnitData;
        precipitationUnit.value = precipitationUnitData;
        humidityUnit.value = humidityUnitData;
        windSpeedUnit.value = windSpeedUnitData;
        snowDepthUnit.value = snowDepthUnitData;
      } catch (e) {
        errorHandle(error, e);
      }
    },
    (e) => errorHandle(error, e),
    geoLocationOptions
  );

  return {
    error,
    location,
    temperature,
    precipitation,
    humidity,
    windSpeed,
    snowDepth,
    temperatureUnit,
    precipitationUnit,
    humidityUnit,
    windSpeedUnit,
    snowDepthUnit,
  };
};

export default getWeather;
