import moment from "moment";
import SunIcon from "vue-material-design-icons/WhiteBalanceSunny.vue";
import CloudIcon from "vue-material-design-icons/CloudOutline.vue";
import OvercastIcon from "vue-material-design-icons/Cloud.vue";
import FogIcon from "vue-material-design-icons/WeatherFog.vue";
import DrizzleIcon from "vue-material-design-icons/WeatherRainy.vue";
import RainIcon from "vue-material-design-icons/WeatherPouring.vue";
import SnowIcon from "vue-material-design-icons/Snowflake.vue";
import ThunderIcon from "vue-material-design-icons/WeatherLightning.vue";
import TemperatureIcon from "vue-material-design-icons/Thermometer.vue";
import PrecipitationIcon from "vue-material-design-icons/Water.vue";
import WindIcon from "vue-material-design-icons/WeatherWindy.vue";
import HumidIcon from "vue-material-design-icons/WaterPercent.vue";

export const formatStatsProps = (today, unit) => {
  const { snowDepth, windSpeed, precipitation, humidity, apparentTemp } = today;
  const {
    snowDepthUnit,
    windSpeedUnit,
    precipitationUnit,
    humidityUnit,
    temperatureUnit,
  } = unit;

  const stats = [
    {
      name: "Feels like",
      value: apparentTemp,
      unit: temperatureUnit,
      component: TemperatureIcon,
    },
    {
      name: "Precipitation",
      value: precipitation,
      unit: precipitationUnit,
      component: PrecipitationIcon,
    },
    {
      name: "Humidity",
      value: humidity,
      unit: humidityUnit,
      component: HumidIcon,
    },
    {
      name: "Wind Speed",
      value: windSpeed,
      unit: windSpeedUnit,
      component: WindIcon,
    },

    {
      name: "Snow Depth",
      value: snowDepth,
      unit: snowDepthUnit,
      component: SnowIcon,
    },
  ];

  return stats;
};

export const errorHandle = (eRef, error) => {
  const { message } = error;
  eRef.value = message;
};

export const getUrls = (position) => {
  const { coords } = position;
  const { latitude: lat, longitude: long } = coords;
  const { timeZone } = Intl.DateTimeFormat().resolvedOptions();
  const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation,weathercode,snow_depth,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=${timeZone}`;
  const weatherUrlFah = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,apparent_temperature&daily=temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit&timezone=${timeZone}`;
  const locationUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en`;
  return { weatherUrl, weatherUrlFah, locationUrl };
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

const makeWeeklyWeatherDate = (code, maxT, minT, time) => {
  const result = [];
  const length = maxT.length;
  for (let i = 0; i < length; i++) {
    const data = {
      weatherCode: code[i],
      maxTemp: maxT[i],
      minTemp: minT[i],
      day: i === 0 ? "Today" : moment(time[i]).format("ddd"),
    };
    result.push(data);
  }
  return result;
};

const makeHourlyWeatherDate = (index, time, temperature) => {
  const result = [];
  for (let i = index; i < index + 24; i++) {
    const data = {
      y: temperature[i],
      x: time[i],
    };
    result.push(data);
  }
  return result;
};

const makeFahData = (cel, fah, dateWeek, weatherCodeWeek, i, time) => {
  const {
    daily: { temperature_2m_max: maxTempFah, temperature_2m_min: minTempFah },
    hourly_units: { temperature_2m: temperatureUnitFah },
    hourly: {
      temperature_2m: temperatureFah,
      apparent_temperature: apparentTempFah,
    },
  } = fah;

  const { today, unit } = cel;

  const weeklyFah = makeWeeklyWeatherDate(
    weatherCodeWeek,
    maxTempFah,
    minTempFah,
    dateWeek
  );

  const hourlyFah = makeHourlyWeatherDate(i, time, temperatureFah);

  const todayFah = {
    ...today,
    temperature: temperatureFah[i],
    apparentTemp: apparentTempFah[i],
  };

  const unitFah = { ...unit, temperatureUnit: temperatureUnitFah };

  return {
    weekly: weeklyFah,
    today: todayFah,
    hourly: hourlyFah,
    unit: unitFah,
  };
};

export const formatWeatherData = (weatherData, weatherFah) => {
  const i = getCurrentTimeIndex(weatherData);
  const {
    daily: {
      weathercode: weatherCodeWeek,
      temperature_2m_max: maxTemp,
      temperature_2m_min: minTemp,
      time: dateWeek,
    },
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
      time,
      apparent_temperature: apparentTemp,
    },
  } = weatherData;

  const weekly = makeWeeklyWeatherDate(
    weatherCodeWeek,
    maxTemp,
    minTemp,
    dateWeek
  );

  const hourly = makeHourlyWeatherDate(i, time, temperature);

  const today = {
    temperature: temperature[i],
    precipitation: precipitation[i],
    humidity: humidity[i],
    windSpeed: windSpeed[i],
    snowDepth: snowDepth[i],
    weatherCode: weathercode[i],
    apparentTemp: apparentTemp[i],
  };

  const unit = {
    temperatureUnit,
    precipitationUnit,
    humidityUnit,
    windSpeedUnit,
    snowDepthUnit,
  };

  const cel = { weekly, today, hourly, unit };

  const fah = makeFahData(cel, weatherFah, dateWeek, weatherCodeWeek, i, time);

  return { cel, fah };
};

export const getWeatherIcon = (code) => {
  switch (code) {
    case 0:
    case 1:
      return SunIcon;
    case 2:
      return CloudIcon;
    case 3:
      return OvercastIcon;
    case 45:
    case 48:
      return FogIcon;
    case 51:
    case 53:
    case 56:
    case 61:
    case 66:
    case 80:
      return DrizzleIcon;
    case 55:
    case 57:
    case 63:
    case 65:
    case 67:
    case 81:
    case 82:
      return RainIcon;
    case 71:
    case 73:
    case 75:
    case 77:
    case 85:
    case 86:
      return SnowIcon;
    case 95:
    case 96:
    case 99:
      return ThunderIcon;
  }
};
