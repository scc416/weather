<template>
  <div>
    <div>{{ day }}</div>
    <component :is="icon" />
  </div>
</template>

<script setup>
import { getWeatherIcon } from "@/helpers";

const { data } = defineProps(["data"]);
const { weatherCode, maxTemp, minTemp, day } = data;
const icon = getWeatherIcon(weatherCode);
</script>

<style>
</style>