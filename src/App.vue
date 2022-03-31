<template>
  <CoverImage :code="data.weatherCode" />
  <Rain v-if="true" />
  <Wave />

  <div class="content">
    {{ data.temperature }}
    {{ data.temperatureUnit }}
    {{ data.precipitation }}
    <span class="unit">{{ data.precipitationUnit }}</span>
    {{ data.humidity }}
    <span class="unit">{{ data.humidityUnit }}</span>
    {{ data.windSpeed }}
    <span class="unit">{{ data.windSpeedUnit }}</span>
    {{ data.snowDepth }}
    <span class="unit">{{ data.snowDepthUnit }}</span>
  </div>
</template>

<script>
import getWeather from "./composables/getWeather";
import Rain from "./components/cover/Rain.vue";
import Wave from "./components/cover/Wave.vue";
import CoverImage from "./components/cover/CoverImage.vue";

export default {
  setup() {
    const data = getWeather();
    return data;
  },
  components: { Rain, CoverImage, Wave },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  text-align: center;
  font-family: "Montserrat";
  width: 100vw;
  overflow-x: hidden;
}

#app {
  overflow-x: hidden;
}

* {
  box-sizing: border-box;
}

.content {
  position: relative;
  z-index: 1;
}

.unit {
  font-size: 0.6em;
  position: relative;
  bottom: 0.1em;
}
</style>
