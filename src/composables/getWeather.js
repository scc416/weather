import axios from "axios";
import { ref } from "vue";
import {
  errorHandle,
  getUrls,
  formatLocationStr,
  formatWeatherData,
} from "@/helpers";

const getWeather = () => {
  const error = ref("");
  const data = ref(null);
  let dataCel = null;
  let dataFah = null;
  let isCelcius = true;

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const { weatherUrl, locationUrl, weatherUrlFah } = getUrls(position);

      try {
        const { data: weather } = await axios.get(weatherUrl);
        const { data: location } = await axios.get(locationUrl);
        const { data: weatherFah } = await axios.get(weatherUrlFah);

        const { cel, fah } = formatWeatherData(weather, weatherFah);
        data.value = { ...cel, location: formatLocationStr(location) };
        dataCel = data.value;
        dataFah = { ...fah, location: formatLocationStr(location) };
      } catch (e) {
        errorHandle(error, e);
      }
    },
    (e) => errorHandle(error, e)
  );

  const toggleUnit = () => {
    isCelcius = !isCelcius;
    if (isCelcius) return (data.value = dataCel);
    data.value = dataFah;
  };

  return { error, data, toggleUnit };
};

export default getWeather;
