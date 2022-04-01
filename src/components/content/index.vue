<template>
  <div class="content">
    <Header
      :temperature="data.today.temperature"
      :temperatureUnit="data.unit.temperatureUnit"
      :location="location"
      :weatherCode="weatherCode"
      :clickHandler="toggleUnit"
    />
    <Details :data="data" :options="options" />
  </div>
</template>

<script setup>
import Header from "./Header.vue";
import Details from "./Details/";

const { data } = defineProps(["data", "toggleUnit", "options"]);

const { today, unit, location } = data;
const { weatherCode } = today;
</script>

<style>
.content {
  position: relative;
}
</style>