<template>
  <div class="content">
    <Header
      :temperature="temperature"
      :temperatureUnit="temperatureUnit"
      :location="location"
      :weatherCode="weatherCode"
    />
    <Details :data="data" />
  </div>
</template>

<script setup>
import Header from "./Header.vue";
import Details from "./Details.vue";

const { data } = defineProps(["data"]);

const { today, unit, location } = data;
const { temperature, weatherCode } = today;
const { temperatureUnit } = unit;
</script>

<style>
.content {
  position: relative;
}

.details {
  margin: 0 1em 1em;
}
</style>