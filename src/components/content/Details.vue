<template>
  <div class="details">
    <WeekList :data="weekly" :degree="temperatureUnit[0]" />
    <StatList :today="today" :unit="unit" />
    <HourlyGraph :data="hourly" :unit="temperatureUnit" />
  </div>
</template>

<script setup>
import WeekList from "./WeekList/";
import HourlyGraph from "./HourlyGraph.vue";
import StatList from "./StatList/";

const { data } = defineProps(["data"]);
const { today, unit, weekly, location, hourly } = data;
const { temperature, weatherCode } = today;
const { temperatureUnit } = unit;
</script>

<style>
.details {
  margin: 0 1em 1em;
}

.details > * {
  margin-top: 1em;
}
</style>