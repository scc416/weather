<template>
  <div class="content">
    <Header
      :temperature="data.today.temperature"
      :temperatureUnit="data.unit.temperatureUnit"
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
const { weatherCode } = today;
</script>

<style>
.content {
  position: relative;
}
</style>