<template>
  <Cover :code="weatherCode" />
  <div class="content">
    {{ data.temperature }}
    {{ data.temperatureUnit }}
    {{ data.location }}
    {{ data.precipitation }}
    {{ data.precipitationUnit }}
    {{ data.humidity }}
    {{ data.humidityUnit }}
    {{ data.windSpeed }}
    {{ data.windSpeedUnit }}
    {{ data.snowDepth }}
    {{ data.snowDepthUnit }}
  </div>
</template>

<script>
import getWeather from "./composables/getWeather";
import Cover from "./components/cover/";
import Content from "./components/content/";

export default {
  setup() {
    const data = getWeather();
    return data;
  },
  components: { Cover, Content },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  text-align: center;
  font-family: "Montserrat";
  width: 100vw;
  overflow: hidden;
}

#app {
  overflow-x: hidden;
}

* {
  box-sizing: border-box;
}
</style>
