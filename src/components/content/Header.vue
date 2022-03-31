<template>
  <div class="header">
    <div></div>
    <div class="temperature">
      <span>
        {{ temperature }}
      </span>
      <span class="unit"> {{ temperatureUnit }}</span>
    </div>
    <div class="location">{{ location }}</div>
  </div>
</template>

<script>
export default {
  props: ["temperature", "temperatureUnit", "location"],
};
</script>

<style>
.header {
  height: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.temperature {
  position: relative;
  color: #e36968;
  font-size: 2.5em;
  margin: 0.5em 0;
  font-weight: 700;
}

.unit {
  font-size: 0.6em;
  font-weight: 500;
  position: absolute;
  top: 0.1em;
}

.location {
  font-weight: 600;
}
</style>