<template>
  <img class="cover" src="./assets/backgrounds/foggy.png" alt="" />
  <div class="cover-gradient">
    <div class="cover-gradient-top">
      <div>
        {{ temperature }}
        <span class="unit">{{ temperatureUnit }}</span>
      </div>
      <div>{{ location }}</div>
    </div>
    <div class="cover-gradient-bottom"></div>
  </div>
  <div class="content">
    {{ precipitation }}
    <span class="unit">{{ precipitationUnit }}</span>
    {{ humidity }}
    <span class="unit">{{ humidityUnit }}</span>
    {{ windSpeed }}
    <span class="unit">{{ windSpeedUnit }}</span>
    {{ snowDepth }}
    <span class="unit">{{ snowDepthUnit }}</span>
  </div>
</template>

<script>
import getWeather from "./composables/getWeather";

export default {
  setup() {
    const data = getWeather();
    return data;
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

span.unit {
  font-size: 0.6em;
  position: relative;
  bottom: 0.1em;
}
</style>
