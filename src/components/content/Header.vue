<template>
  <div class="header">
    <div class="weather-icon"><SunIcon /></div>
    <div class="temperature">
      <span>
        {{ temperature }}
      </span>
      <span class="unit"> {{ temperatureUnit }}</span>
    </div>
    <div class="location">{{ location }}</div>
  </div>
</template>

<script setup>
import SunIcon from "vue-material-design-icons/WhiteBalanceSunny.vue";

defineProps(["temperature", "temperatureUnit", "location"]);
</script>

<style>
.header {
  height: 65vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.weather-icon .material-design-icon {
  height: 3em;
  width: 3em;
  color: #f1b4c4;
}

.weather-icon .material-design-icon > .material-design-icon__svg {
  height: 3em;
  width: 3em;
}

.temperature {
  position: relative;
  color: #e36968;
  font-size: 2.5em;
  margin: 0.1em 0 0.1em;
  font-weight: 700;
}

.unit {
  font-size: 0.6em;
  font-weight: 500;
  position: absolute;
  top: 0.1em;
}

.location {
  font-weight: 600;
  margin-bottom: 2.5em;
}
</style>