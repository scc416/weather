<template>
  <div class="details">
    <WeekList :data="data.weekly" :degree="temperatureUnit[0]" />
    <StatList :today="data.today" :unit="data.unit" />
    <HourlyGraph :options="options" />
  </div>
</template>

<script setup>
import WeekList from "./WeekList/";
import HourlyGraph from "./HourlyGraph.vue";
import StatList from "./StatList/";

const { data, options } = defineProps(["data", "options"]);
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