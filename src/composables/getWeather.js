import axios from "axios";
import { ref } from "vue";
import {
  errorHandle,
  getUrls,
  formatLocationStr,
  formatWeatherData,
} from "@/helpers";
import { graphOptions } from "@/constants";

const getWeather = () => {
  const error = ref("");
  const data = ref(null);
  const options = ref(graphOptions);
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
        options.value.series = [{ points: dataCel.hourly }];
        options.value.defaultPoint.label.text = `%value${dataCel.unit.temperatureUnit}`;
      } catch (e) {
        errorHandle(error, e);
      }
    },
    (e) => errorHandle(error, e)
  );

  const toggleUnit = () => {
    isCelcius = !isCelcius;
    if (isCelcius) {
      data.value = dataCel;
      options.value.series = [{ points: dataCel.hourly }];
      return (options.value.defaultPoint.label.text = `%value${dataCel.unit.temperatureUnit}`);
    }
    data.value = dataFah;
    options.value.series = [{ points: dataFah.hourly }];
    options.value.defaultPoint.label.text = `%value${dataFah.unit.temperatureUnit}`;
  };

  return { error, data, toggleUnit, options };
};

export default getWeather;
