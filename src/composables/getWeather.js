const getWeather = () => {
  navigator.geolocation.getCurrentPosition((position) => {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    console.log(lat, long, timezone);
  });
};

export default getWeather;
