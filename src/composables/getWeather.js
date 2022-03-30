import axios from "axios";
import { ref } from "vue";
import { errorHandle, getUrls, formatLocationStr } from "@/helpers";
import { geoLocationOptions } from "@/constants";

const getWeather = () => {
  const error = ref("");
  const location = ref("");

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const { weatherUrl, locationUrl } = getUrls(position);

      try {
        const { data: weatherData } = await axios.get(weatherUrl);
        const { data: locationData } = await axios.get(locationUrl);

        location.value = formatLocationStr(locationData);

        console.log(weatherData);
      } catch (e) {
        errorHandle(error, e);
      }
    },
    (e) => errorHandle(error, e),
    geoLocationOptions
  );

  return { error, location };
};

export default getWeather;
