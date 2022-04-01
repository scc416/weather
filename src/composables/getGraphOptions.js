import { graphOptions } from "@/constants";
import { ref } from "vue";

const getGraphOptions = (data, unit) => {
  const options = ref(graphOptions);

  options.value.series = [{ points: data }];
  options.value.defaultPoint.label.text = `%value${unit}`;

  return options;
};

export default getGraphOptions;
