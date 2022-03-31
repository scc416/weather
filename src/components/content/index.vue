<template>
  <div class="content">
    <div>
      {{ data.temperature }}
    </div>
    <div>
      {{ data.temperatureUnit }}
    </div>
    <div>
      {{ data.location }}
    </div>
    <div>
      {{ data.precipitation }}
    </div>
    <div>
      {{ data.precipitationUnit }}
    </div>
    <div>
      {{ data.humidity }}
    </div>
    <div>
      {{ data.humidityUnit }}
    </div>
    <div>
      {{ data.windSpeed }}
    </div>
    <div>
      {{ data.windSpeedUnit }}
    </div>
    <div>
      {{ data.snowDepth }}
    </div>
    <div>
      {{ data.snowDepthUnit }}
    </div>
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