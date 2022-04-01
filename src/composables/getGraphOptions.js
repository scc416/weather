import { graphOptions } from "@/constants";
import { updateLocale } from "moment";
import { ref } from "vue";

const getGraphOptions = (data) => {
  const options = ref(graphOptions);

  options.value.series = [{ points: data.hourly }];
  options.value.defaultPoint.label.text = `%value${data.unit.temperatureUnit}`;

  const updateData = () => {
    console.log(data);
    options.value.series = [{ points: data.hourly }];
    options.value.defaultPoint.label.text = `%value${data.unit.temperatureUnit}`;
  };

  return { options, updateData };
};

export default getGraphOptions;
