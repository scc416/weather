<template>{{ value }}{{ unit }}</template>

<script setup>
const { value, unit } = defineProps(["value", "unit"]);
</script>

<style>
</style>