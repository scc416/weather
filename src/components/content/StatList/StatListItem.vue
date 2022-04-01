<template>
  <div>
    <div><component :is="component" /></div>
    <div class="stats-name">{{ name }}</div>
    <div class="value">{{ value }}{{ unit }}</div>
  </div>
</template>

<script setup>
const { data } = defineProps(["data"]);
const { value, unit, name, component } = data;
</script>

<style>
.value {
  color: #ec5c5b;
}

.stats-name {
  font-size: 0.8em;
}
</style>