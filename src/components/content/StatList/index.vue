<template>
  <div class="stat-container">
    <StatListItem v-for="item in stats" :data="item" :key="item.name" />
  </div>
</template>

<script setup>
import StatListItem from "./StatListItem.vue";
import { formatStatsProps } from "@/helpers";

const { today, unit } = defineProps(["today", "unit"]);
const stats = formatStatsProps(today, unit);
</script>

<style>
.stat-container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.stat-container > * {
  width: 50%;
}
</style>