<template>
  <div class="stat-container">
    <StatListItem
      name="Feels like"
      :value="apparentTemp"
      :unit="temperatureUnit"
      :component="TemperatureIcon"
    />
    <StatListItem
      name="Precipitation"
      :value="precipitation"
      :unit="precipitationUnit"
    />
    <StatListItem name="Wind Speed" :value="windSpeed" :unit="windSpeedUnit" />
    <StatListItem name="Humidity" :value="humidity" :unit="humidityUnit" />
    <StatListItem name="Snow Depth" :value="snowDepth" :unit="snowDepthUnit" />
  </div>
</template>

<script setup>
import StatListItem from "./StatListItem.vue";
import TemperatureIcon from "vue-material-design-icons/Thermometer.vue"
const { today, unit } = defineProps(["today", "unit"]);
const { snowDepth, windSpeed, precipitation, humidity, apparentTemp } = today;
const {
  snowDepthUnit,
  windSpeedUnit,
  precipitationUnit,
  humidityUnit,
  temperatureUnit,
} = unit;
</script>

<style>
.stat-container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.stat-container > * {
  width: 50%;
}
</style>