<template>
  <img class="cover" src="./assets/backgrounds/foggy.png" alt="" />
  <div class="cover-gradient">
    <div class="cover-gradient-top">{{ location }}</div>
    <div class="cover-gradient-bottom"></div>
  </div>
</template>

<script>
import getWeather from "./composables/getWeather";

export default {
  setup() {
    const { error, location } = getWeather();
    return { error, location };
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  text-align: center;
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
}

.cover-gradient-top {
  background-image: linear-gradient(to bottom, #ffffff00, #ffffffff);
  height: 80vw;
}

.cover-gradient-bottom {
  height: 20vw;
  background: #ffffff;
}
</style>
