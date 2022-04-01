<template>
  <JSCharting :options="chartOptions"></JSCharting>
</template>

<script setup>
import { defineComponent, ref } from "vue";
import JSCharting, { JSC } from "jscharting-vue";

const names = ["SAT", "SUN", "MON", "TUE", "WED", "THU", "FRI"];

function tickLabelText(v) {
  return names[v];
}

const chartOptions = ref({
  type: "line spline",
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
      points: [
        { x: "3/31/2022 01:00", y: 67 },
        { x: "3/31/2022 02:00", y: 72 },
        { x: "3/31/2022 03:00", y: 66 },
        { x: "3/31/2022 04:00", y: 84 },
        { x: "3/31/2022 05:00", y: 74 },
        { x: "3/31/2022 06:00", y: 72 },
        { x: "3/31/2022 07:00", y: 84 },
        { x: "3/31/2022 08:00", y: 50 },
        { x: "3/31/2022 09:00", y: 50 },
        { x: "3/31/2022 10:00", y: 50 },
        { x: "3/31/2022 11:00", y: 50 },
        { x: "3/31/2022 12:00", y: 50 },
        { x: "3/31/2022 13:00", y: 50 },
        { x: "3/31/2022 14:00", y: 50 },
        { x: "3/31/2022 15:00", y: 50 },
      ],
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