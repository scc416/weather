<template>
  <Cover v-if="data" :code="data.weatherCode" />
  <Content :data="data" />
</template>

<script>
import getWeather from "./composables/getWeather";
import Cover from "./components/cover/";
import Content from "./components/content/";

export default {
  setup() {
    const { error, data } = getWeather();
    return { error, data };
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
