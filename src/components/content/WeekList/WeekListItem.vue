<template>
  <div class="weekly-elm">
    <div class="day">{{ day }}</div>
    <component :is="icon" />
    <div class="max-min-temp">
      <div>
        <div>Min</div>
        <div>{{ minTemp }}{{ degree }}</div>
      </div>
      <div>
        <div>Max</div>
        <div>{{ maxTemp }}{{ degree }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getWeatherIcon } from "@/helpers";

const { data, degree } = defineProps(["data", "degree"]);
const { weatherCode, maxTemp, minTemp, day } = data;
const icon = getWeatherIcon(weatherCode);
</script>

<style>
.weekly-elm {
  color: #fff;
  margin: 0.3em;
  padding: 0.6em;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 10em;
  min-width: 5em;
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
  font-size: 1.2em;
}

.max-min-temp {
  display: flex;
  font-size: 0.75em;
  width: 100%;
  justify-content: space-between;
}
</style>