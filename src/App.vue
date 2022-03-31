<template>
  <Content v-if="data" :data="data" />
  <Spin v-else :error="error" />
</template>

<script setup>
import getWeather from "./composables/getWeather";
import Content from "./components/content/";
import Spin from "./components/spin.vue";

const { error, data } = getWeather();
</script>

<style>
body {
  margin: 0;
  padding: 0;
  text-align: center;
  font-family: "Montserrat";
  width: 100vw;
  background: #fcfcfc;
}

#app {
  overflow-x: hidden;
}

* {
  box-sizing: border-box;
}
</style>
