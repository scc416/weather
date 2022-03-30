import axios from "axios";
import { ref } from "vue";
import { errorHandle } from "@/helpers";

const getWeather = () => {
  const error = ref("");

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const { coords } = position;
      const { latitude: lat, longitude: long } = coords;
      const { timeZone } = Intl.DateTimeFormat().resolvedOptions();

      const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,relativehumidity_2m,precipitation,weathercode,snow_depth,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,precipitation_hours&timezone=${timeZone}`;
      const locationUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en`;
      try {
        const { data } = await axios.get(weatherUrl);
        const {
          data: { countryName, city },
        } = await axios.get(locationUrl);
        console.log(data, countryName, city);
      } catch (e) {
        errorHandle(error, e);
      }
    },
    (e) => errorHandle(error, e),
    { enableHighAccuracy: true, timeout: 5000 }
  );

  return { error };
};

export default getWeather;
