<template>
  <JSCharting :options="chartOptions"></JSCharting>
</template>

<script setup>
import { defineComponent, ref } from "vue";
import JSCharting, { JSC } from "jscharting-vue";

const names = ["SAT", "SUN", "MON", "TUE", "WED", "THU", "FRI"];

// names.forEach(function(v, i) {
//   names.push(
//     days[i] +
//       ' ' +
//       (i + 1) +
//       '<br><icon name=' +
//       weatherIcons[i] +
//       ' size=34 verticalAlign=center margin_right=4 color=#cfd8dc>'
//   );
// });

function tickLabelText(v) {
  return names[v];
}

const chartOptions = ref({
  type: "line spline",
  yAxis_visible: false,
  xAxis: {
    defaultTick: {
      gridLine_visible: false,
      line_visible: false,
      label: {
        text: tickLabelText,
        style: {
          fontWeight: "bold",
          color: "#000",
          fontSize: 14,
        },
      },
    },
    line_visible: false,
    orientation: "top",
  },
  legend_visible: false,
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
  defaultSeries_mouseTracking_enabled: false,
  palette: ["#eb7f7f", "#eb7f7f"],
  series: [
    {
      points: [
        { y: 31 },
        { y: 31 },
        { y: 29 },
        { y: 29 },
        { y: 30 },
        { y: 29 },
        { y: 30 },
      ],
    },
  ],
  toolbar_visible: false,
});
</script>