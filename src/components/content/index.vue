<template>
  <div class="content">
    <Header
      :temperature="temperature"
      :temperatureUnit="temperatureUnit"
      :location="location"
      :weatherCode="weatherCode"
    />
    <div>
      {{ precipitation }}
    </div>
    <div>
      {{ precipitationUnit }}
    </div>
    <div>
      {{ humidity }}
    </div>
    <div>
      {{ humidityUnit }}
    </div>
    <div>
      {{ windSpeed }}
    </div>
    <div>
      {{ windSpeedUnit }}
    </div>
    <div>
      {{ snowDepth }}
    </div>
    <div>
      {{ snowDepthUnit }}
    </div>
  </div>
</template>

<script setup>
import Header from "./Header.vue";

const { data } = defineProps(["data"]);
const { today, unit } = data;
const {
  snowDepth,
  windSpeed,
  temperature,
  location,
  precipitation,
  humidity,
  weatherCode,
} = today;

const {
  snowDepthUnit,
  windSpeedUnit,
  temperatureUnit,
  precipitationUnit,
  humidityUnit,
} = unit;
</script>

<style>
.content {
  position: relative;
}
</style>