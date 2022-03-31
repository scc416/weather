<template>
  <div class="content">
    <Header
      :temperature="temperature"
      :temperatureUnit="temperatureUnit"
      :location="location"
      :weatherCode="weatherCode"
    />
  </div>
</template>

<script setup>
import Header from "./Header.vue";

const { data } = defineProps(["data"]);
const { today, unit, weekly, location } = data;
const {
  temperature,
  weatherCode,
  // snowDepth,
  // windSpeed,
  // precipitation,
  // humidity,
} = today;

const {
  temperatureUnit,
  // snowDepthUnit,
  // windSpeedUnit,
  // precipitationUnit,
  // humidityUnit,
} = unit;
</script>

<style>
.content {
  position: relative;
}
</style>