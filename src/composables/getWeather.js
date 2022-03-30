import axios from "axios";

const getWeather = () => {
  navigator.geolocation.getCurrentPosition(async (position) => {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,relativehumidity_2m,precipitation,weathercode,snow_depth,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=${timezone}`;
    try {
      const { data } = await axios.get(url);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  });
};

export default getWeather;
