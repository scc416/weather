export const graphOptions = {
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
  defaultSeries_mouseTracking_enabled: false,
  palette: ["#EB7F7F"],
  defaultPoint: {
    label: {
      visible: true,
      align: "center",
    },
    marker: {
      size: 8,
      type: "circle",
      outline_width: 0,
    },
  },
};
