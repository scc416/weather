<template>
  <div class="content">
    <Header
      :temperature="data.temperature"
      :temperatureUnit="data.temperatureUnit"
      :location="data.location"
    />
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
import Header from "./Header.vue";

export default {
  props: ["data"],
  components: { Header },
  setup() {},
};
</script>

<style>
.content {
  position: relative;
}
</style>