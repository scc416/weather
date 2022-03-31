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
const { today } = data;
const {
  snowDepthUnit,
  snowDepth,
  windSpeed,
  windSpeedUnit,
  temperature,
  temperatureUnit,
  location,
  precipitation,
  precipitationUnit,
  humidity,
  humidityUnit,
  weatherCode,
} = today;
</script>

<style>
.content {
  position: relative;
}
</style>