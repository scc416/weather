<template>
  <div class="stat-container">
    <StatListItem v-for="item in stats" :data="item" :key="item.name" />
  </div>
</template>

<script setup>
import StatListItem from "./StatListItem.vue";
import TemperatureIcon from "vue-material-design-icons/Thermometer.vue";
import RainIcon from "vue-material-design-icons/Water.vue";
import WindIcon from "vue-material-design-icons/WeatherWindy.vue";
import SnowIcon from "vue-material-design-icons/Snowflake.vue";
import HumidIcon from "vue-material-design-icons/CloudPercent.vue";

const { today, unit } = defineProps(["today", "unit"]);
const { snowDepth, windSpeed, precipitation, humidity, apparentTemp } = today;
const {
  snowDepthUnit,
  windSpeedUnit,
  precipitationUnit,
  humidityUnit,
  temperatureUnit,
} = unit;

const stats = [
  {
    name: "Feels like",
    value: apparentTemp,
    unit: temperatureUnit,
    component: TemperatureIcon,
  },
  {
    name: "Precipitation",
    value: precipitation,
    unit: precipitationUnit,
    component: RainIcon,
  },
  {
    name: "Wind Speed",
    value: windSpeed,
    unit: windSpeedUnit,
    component: WindIcon,
  },
  {
    name: "Humidity",
    value: humidity,
    unit: humidityUnit,
    component: HumidIcon,
  },
  {
    name: "Snow Depth",
    value: snowDepth,
    unit: snowDepthUnit,
    component: SnowIcon,
  },
];
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