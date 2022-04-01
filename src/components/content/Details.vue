<template>
  <div class="details">
    <WeekList :data="data.weekly" :degree="temperatureUnit[0]" />
    <StatList :today="data.today" :unit="data.unit" />
    <HourlyGraph :data="data.hourly" :unit="data.unit.temperatureUnit" />
  </div>
</template>

<script setup>
import WeekList from "./WeekList/";
import HourlyGraph from "./HourlyGraph.vue";
import StatList from "./StatList/";

const { data } = defineProps(["data"]);
const { today, unit, weekly, location } = data;
const { weatherCode } = today;
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