<template>
  <div class="week-container">
    <WeekListItem v-for="day in data" :data="day" :degree="degree" />
  </div>
</template>

<script setup>
import WeekListItem from "./WeekListItem.vue";

const { data, degree } = defineProps(["data", "degree"]);
</script>

<style>
.week-container {
  display: flex;
  overflow-x: scroll;
}

.week-container > *:first-child {
  background: #e5c3d1;
}

.week-container > *:nth-child(2) {
  background: #c37e93;
}

.week-container > *:nth-child(3) {
  background: #f7a9a7;
}

.week-container > *:nth-child(4) {
  background: #e5c3d1;
}

.week-container > *:nth-child(5) {
  background: #c37e93;
}

.week-container > *:nth-child(6) {
  background: #f7a9a7;
}

.week-container > *:nth-child(7) {
  background: #e5c3d1;
}
</style>