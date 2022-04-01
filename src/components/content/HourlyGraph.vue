<template>
  <div class="graph-container">
    <JSCharting :options="chartOptions"></JSCharting>
  </div>
</template>

<script setup>
import { defineComponent, ref } from "vue";
import JSCharting, { JSC } from "jscharting-vue";

const { data } = defineProps(["data"]);

const chartOptions = ref({
  type: "line spline",
  width: 1200,
  legend_visible: false,
  xAxis: {
    scale: {
      type: "time",
      interval: {
        unit: "hour",
        multiplier: 1,
      },
    },
    orientation: "top",
  },
  yAxis_visible: false,
  series: [
    {
      points: data,
    },
  ],
  defaultSeries_mouseTracking_enabled: false,
  palette: ["#EB7F7F"],
  defaultPoint: {
    label: {
      visible: true,
      text: "%value°C",
      align: "center",
    },
    marker: {
      size: 8,
      type: "circle",
      outline_width: 0,
    },
  },
});
</script>

<style>
.graph-container {
  width: 100%;
  overflow-x: scroll;
}
</style>