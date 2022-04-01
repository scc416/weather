<template>
  <div v-if="show">
    <div><component :is="component" /></div>
    <div class="stats-name">{{ name }}</div>
    <div class="value">
      {{ value }}
      <span class="unit">{{ unit }}</span>
    </div>
  </div>
</template>

<script setup>
const { computed } = require("@vue/runtime-core");

const { data } = defineProps(["data"]);
const { value, unit, name, component } = data;
const show = computed(() => {
  const isSnowDepth = name === "Snow Depth";
  return !isSnowDepth || value;
});
</script>

<style>
.value {
  color: #ec5c5b;
}

.stats-name {
  font-size: 0.8em;
}
</style>