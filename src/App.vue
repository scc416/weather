<template>
  <CoverImage :code="1" />
  <Rain v-if="true" />
  <div class="cover-gradient">
    <div class="wave"></div>
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
import Rain from "./components/cover/Rain.vue";
import CoverImage from "./components/cover/CoverImage.vue";

export default {
  setup() {
    const data = getWeather();
    return data;
  },
  components: { Rain, CoverImage },
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

.cover-gradient {
  position: relative;
  width: 110vw;
  top: 20vw;
  left: -5vw;
  z-index: 0;
  color: #fff;
}

.unit {
  font-size: 0.6em;
  position: relative;
  bottom: 0.1em;
}

.wave:before {
  border-bottom: 15vw solid #fff;
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 30vw;
  background-size: 60vw 120vw;
  background-image: radial-gradient(
    circle at 30vw -45vw,
    transparent 60vw,
    #fff 63vw
  );
}

.wave:after {
  border-bottom: 15vw solid #fff;
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 45vw;
  background-size: 120vw 120vw;
  background-image: radial-gradient(
    circle at 30vw 78vw,
    #fff 60vw,
    transparent 63vw
  );
}
</style>
