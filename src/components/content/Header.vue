<template>
  {{ temperature }}

  {{ data.temperatureUnit }}

  {{ location }}
</template>

<script>
export default {
  props: ["temperature", "temperatureUnit", "location"],
};
</script>

<style>
</style>