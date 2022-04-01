<template>
  <div class="weekly-elm">
    <div class="day">{{ day }}</div>
    <component :is="icon" />
    <div class="max-min-temp">
      <div>
        <div>Min.</div>
        <div>{{ minTemp }}</div>
      </div>
      <div>
        <div>Max.</div>
        <div>{{ maxTemp }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getWeatherIcon } from "@/helpers";

const { data } = defineProps(["data", "unit"]);
const { weatherCode, maxTemp, minTemp, day } = data;
const icon = getWeatherIcon(weatherCode);
</script>

<style>
.weekly-elm {
  color: #fff;
  margin: 0.5em;
  padding: 0.7em 0.8em;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 10em;
}

.weekly-elm .material-design-icon {
  height: 2em;
  width: 2em;
}

.weekly-elm .material-design-icon > .material-design-icon__svg {
  height: 2em;
  width: 2em;
}

.day {
  font-size: 1.3em;
}

.max-min-temp {
  display: flex;
  font-size: 0.8em;
  width: 100%;
  justify-content: space-between;
}
</style>