<template>
  <div v-if="error">{{ error }}</div>
</template>

<script>
import getWeather from "./composables/getWeather";

export default {
  setup() {
    const { error } = getWeather();
    return { error };
  },
};
</script>

<style>
</style>
