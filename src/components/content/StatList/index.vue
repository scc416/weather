<template>
  <div>
    <StatListItem :value="precipitation" :unit="precipitationUnit" />
    <StatListItem :value="windSpeed" :unit="windSpeedUnit" />
    <StatListItem :value="humidity" :unit="humidityUnit" />
    <StatListItem :value="snowDepth" :unit="snowDepthUnit" />
  </div>
</template>

<script setup>
import StatListItem from "./StatListItem.vue";
const { today, unit } = defineProps(["today", "unit"]);
const { snowDepth, windSpeed, precipitation, humidity } = today;
const { snowDepthUnit, windSpeedUnit, precipitationUnit, humidityUnit } = unit;
</script>

<style>
</style>