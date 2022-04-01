<template>
  <div class="graph-container">
    <JSCharting :options="chartOptions"></JSCharting>
  </div>
</template>

<script setup>
import { defineComponent, ref } from "vue";
import JSCharting, { JSC } from "jscharting-vue";
import getGraphOptions from "@/composables/getGraphOptions";
const { data, unit } = defineProps(["data", "unit"]);

const chartOptions = getGraphOptions(data, unit);
</script>

<style>
.graph-container {
  width: 100%;
  overflow-x: scroll;
}
</style>