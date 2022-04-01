<template>
  <div class="graph-container">
    <JSCharting :options="options"></JSCharting>
  </div>
</template>

<script setup>
import JSCharting from "jscharting-vue";
const { options } = defineProps(["options"]);
</script>

<style>
.graph-container {
  width: 100%;
  overflow-x: scroll;
}
</style>