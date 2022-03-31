import moment from "moment";

export const errorHandle = (eRef, error) => {
  const { message } = error;
  eRef.value = message;
};

export const getUrls = (position) => {
  const { coords } = position;
  const { latitude: lat, longitude: long } = coords;
  const { timeZone } = Intl.DateTimeFormat().resolvedOptions();
  const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,relativehumidity_2m,precipitation,weathercode,snow_depth,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,precipitation_hours&timezone=${timeZone}`;
  const locationUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en`;
  return { weatherUrl, locationUrl };
};

export const formatLocationStr = ({ countryName, city }) => {
  return `${city}, ${countryName}`;
};

const getCurrentTimeIndex = ({ hourly: { time } }) => {
  const now = moment();
  for (const index in time) {
    const date = time[index];
    const format = moment(date);
    if (now < format) return index - 1;
  }
};

export const formatWeatherData = (weatherData) => {
  const i = getCurrentTimeIndex(weatherData);
  const {
    hourly_units: {
      temperature_2m: temperatureUnit,
      precipitation: precipitationUnit,
      relativehumidity_2m: humidityUnit,
      windspeed_10m: windSpeedUnit,
      snow_depth: snowDepthUnit,
    },
    hourly: {
      precipitation,
      relativehumidity_2m: humidity,
      weathercode,
      windspeed_10m: windSpeed,
      snow_depth: snowDepth,
      temperature_2m: temperature,
    },
  } = weatherData;
  return {
    temperature: temperature[i],
    temperatureUnit,
    precipitation: precipitation[i],
    precipitationUnit,
    humidity: humidity[i],
    humidityUnit,
    windSpeed: windSpeed[i],
    windSpeedUnit,
    snowDepth: snowDepth[i],
    snowDepthUnit,
    weatherCode: weathercode[i],
  };
};