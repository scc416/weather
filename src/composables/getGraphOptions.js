import { graphOptions } from "@/constants";
import { updateLocale } from "moment";
import { ref } from "vue";

const getGraphOptions = (data, unit) => {
  const options = ref(graphOptions);

  options.value.series = [{ points: data }];
  options.value.defaultPoint.label.text = `%value${unit}`;

  const updateData = (newData, newUnit) => {
    options.value.series = [{ points: newData }];
    options.value.defaultPoint.label.text = `%value${newUnit}`;
  };

  return { options, updateData };
};

export default getGraphOptions;
