<template>
  <div class="content">
    <Header
      :temperature="temperature"
      :temperatureUnit="temperatureUnit"
      :location="location"
      :weatherCode="weatherCode"
    />
    <div class="details">
      <WeekList :data="weekly" :degree="temperatureUnit[0]" />
      <HourlyGraph :data="hourly" />
    </div>
  </div>
</template>

<script setup>
import Header from "./Header.vue";
import WeekList from "./WeekList/";
import HourlyGraph from "./HourlyGraph.vue";

const { data } = defineProps(["data"]);
const { today, unit, weekly, location, hourly } = data;
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

.details {
  margin: 0 1em 1em;
}
</style>