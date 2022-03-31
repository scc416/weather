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
  const data = ref({});

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const { weatherUrl, locationUrl } = getUrls(position);

      try {
        const { data: weather } = await axios.get(weatherUrl);
        const { data: location } = await axios.get(locationUrl);
        
        const weatherData = formatWeatherData(weather);
        data.value = { ...weatherData, location: formatLocationStr(location) };
      } catch (e) {
        errorHandle(error, e);
      }
    },
    (e) => errorHandle(error, e),
    geoLocationOptions
  );

  return { error, data };
};

export default getWeather;
