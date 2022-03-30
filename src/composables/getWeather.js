import axios from "axios";
import { ref } from "vue";
import { errorHandle, getUrls } from "@/helpers";

const getWeather = () => {
  const error = ref("");
  const location = ref("");

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const { coords } = position;
      const { latitude: lat, longitude: long } = coords;
      const { timeZone } = Intl.DateTimeFormat().resolvedOptions();
      const { weatherUrl, locationUrl } = getUrls(lat, long, timeZone);

      try {
        const { data: weatherData } = await axios.get(weatherUrl);
        const {
          data: { countryName, city },
        } = await axios.get(locationUrl);

        location.value = `${city}, ${countryName}`;

        console.log(weatherData, countryName, city);
      } catch (e) {
        errorHandle(error, e);
      }
    },
    (e) => errorHandle(error, e),
    { enableHighAccuracy: true, timeout: 5000 }
  );

  return { error, location };
};

export default getWeather;
