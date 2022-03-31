<template>
  <div class="content">
    {{ data && data.temperature }}
    {{ data && data.temperatureUnit }}
    {{ data && data.location }}
    {{ data && data.precipitation }}
    {{ data && data.precipitationUnit }}
    {{ data && data.humidity }}
    {{ data && data.humidityUnit }}
    {{ data && data.windSpeed }}
    {{ data && data.windSpeedUnit }}
    {{ data && data.snowDepth }}
    {{ data && data.snowDepthUnit }}
  </div>
</template>

<script>
export default {
  props: ["data"],
  setup() {},
};
</script>

<style>
.content {
  position: relative;
}
</style>