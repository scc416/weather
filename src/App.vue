<template>
  <img class="cover" src="./assets/backgrounds/foggy.png" alt="" />
  <div class="cover-gradient">
    <div class="cover-gradient-top">
      <div>{{ temperature }}</div>
      <div>{{ location }}</div>
    </div>
    <div class="cover-gradient-bottom"></div>
  </div>
  <div class="content">
    {{ precipitation }}{{ humidity }}{{ windSpeed }}{{ snowDepth }}
  </div>
</template>

<script>
import getWeather from "./composables/getWeather";

export default {
  setup() {
    const {
      error,
      location,
      temperature,
      precipitation,
      humidity,
      windSpeed,
      snowDepth,
      temperatureUnit,
      precipitationUnit,
      humidityUnit,
      windSpeedUnit,
      snowDepthUnit,
    } = getWeather();

    return {
      error,
      location,
      temperature,
      precipitation,
      humidity,
      windSpeed,
      snowDepth,
      temperatureUnit,
      precipitationUnit,
      humidityUnit,
      windSpeedUnit,
      snowDepthUnit,
    };
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  text-align: center;
  font-family: "Montserrat";
}

* {
  box-sizing: border-box;
}

.cover {
  width: 100vw;
  z-index: -1;
}

.cover-gradient {
  position: absolute;
  top: 40vw;
  left: 0;
  width: 100vw;
  z-index: 0;
}

.cover-gradient-top {
  background-image: linear-gradient(to bottom, #ffffff00, #ffffffff);
  height: 80vw;
}

.cover-gradient-top > div:first-child {
  font-size: 3em;
}

.cover-gradient-top > div:nth-child(2) {
  font-family: "Hind";
  text-transform: uppercase;
  font-size: 1.2em;
}

.cover-gradient-bottom {
  height: 15vw;
  background: #ffffff;
}

.content {
  position: relative;
  bottom: 20vw;
}
</style>
