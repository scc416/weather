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
  const data = ref(null);
  let dataCel = null;
  let dataFah = null;

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const { weatherUrl, locationUrl, weatherUrlFah } = getUrls(position);

      try {
        const { data: weather } = await axios.get(weatherUrl);
        const { data: location } = await axios.get(locationUrl);
        const { data: weatherFah } = await axios.get(weatherUrlFah);

        const { cel, fah } = formatWeatherData(weather, weatherFah);
        data.value = { ...cel, location: formatLocationStr(location) };
        dataCel = cel;
        dataFah = fah;
        console.log(dataFah);
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
