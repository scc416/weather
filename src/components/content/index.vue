<template>
  <div class="content">
    <Header
      :temperature="data.today.temperature"
      :temperatureUnit="data.unit.temperatureUnit"
      :location="location"
      :weatherCode="weatherCode"
      :clickHandler="clickHandler"
    />
    <!-- <Details :data="data" :options="options" /> -->
  </div>
</template>

<script setup>
import Header from "./Header.vue";
import Details from "./Details/";
import getGraphOptions from "@/composables/getGraphOptions";

const { data, toggleUnit } = defineProps(["data", "toggleUnit"]);

const { options, updateData } = getGraphOptions(
  data.hourly,
  data.unit.temperatureUnit
);

const clickHandler = () => {
  toggleUnit();
  updateData(data);
};

const { today, unit, location } = data;
const { weatherCode } = today;
</script>

<style>
.content {
  position: relative;
}
</style>