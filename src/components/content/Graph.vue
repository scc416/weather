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
          color: "#546e7a",
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
  palette: ["#ffb74d", "#64b5f6"],
  series: [
    {
      points: [
        { x: "SAT 1", y: 31 },
        { x: "SUN 2", y: 31 },
        { x: "MON 3", y: 29 },
        { x: "TUE 4", y: 29 },
        { x: "WED 5", y: 30 },
        { x: "THU 6", y: 29 },
        { x: "FRI 7", y: 30 },
      ],
    },
  ],
  toolbar_visible: false,
});
</script>