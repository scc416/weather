const getWeather = () => {
  navigator.geolocation.getCurrentPosition((position) => {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;

    console.log(lat, long);
  });
};

export default getWeather;
