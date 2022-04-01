<template>
  <div>
    {{ value }}{{ unit }}{{ name }}
    <component :is="component" />
  </div>
</template>

<script setup>
const { value, unit, name, component } = defineProps([
  "value",
  "unit",
  "name",
  "component",
]);
</script>

<style>
</style>