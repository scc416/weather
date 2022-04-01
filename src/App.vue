<template>
  <div class="container">
    <button @click="toggleUnit">Toggle</button>
    <Content v-if="data" :data="data" />
    <Spin v-else :error="error" />
  </div>
</template>

<script>
import getWeather from "./composables/getWeather";
import Content from "./components/content/";
import Spin from "./components/spin.vue";

export default {
  setup() {
    const { error, data, toggleUnit } = getWeather();
    return { error, data, toggleUnit };
  },
  components: { Content, Spin },
};
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

.container {
  background: #fcfcfc;
}

* {
  box-sizing: border-box;
}

@media (min-width: 420px) {
  body {
    min-height: 100vh;
    background: #f2e1e9;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container {
    min-height: none;
    background: #fcfcfc;
    height: 667px;
    width: 375px;
    border-radius: 30px;
    overflow-y: scroll;
    padding: 1em;
  }

  #app {
    padding: 2em 0;
  }
}
</style>
