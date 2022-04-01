<template>
  <div>
    {{ value }}{{ unit }}{{ name }}
    <component :is="component" />
  </div>
</template>

<script setup>
const { data } = defineProps(["data"]);
const { value, unit, name, component } = data;
</script>

<style>
</style>