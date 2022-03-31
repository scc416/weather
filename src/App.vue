<template>
  <Cover v-if="data" :code="data.weatherCode" :rain="true" />
  <Content v-if="data" :data="data" />
  <Spin v-if="!data" :error="error" />
</template>

<script>
import getWeather from "./composables/getWeather";
import Cover from "./components/cover/";
import Content from "./components/content/";
import Spin from "./components/spin.vue";

export default {
  setup() {
    const { error, data } = getWeather();
    return { error, data };
  },
  components: { Cover, Content, Spin },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  text-align: center;
  font-family: "Montserrat";
  width: 100vw;
}

#app {
  overflow-x: hidden;
}

* {
  box-sizing: border-box;
}
</style>
