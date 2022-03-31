<template>
  <div class="header">
    <div><MenuIcon /></div>
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
import MenuIcon from "vue-material-design-icons/Menu.vue";

export default {
  props: ["temperature", "temperatureUnit", "location"],
  components: {
    MenuIcon,
  },
};
</script>

<style>
.header {
  height: 65vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.header img {
  width: 2.5em;
}

.temperature {
  position: relative;
  color: #e36968;
  font-size: 2.5em;
  margin: 0.25em 0 0.1em;
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
  margin-bottom: 2.5em;
}
</style>