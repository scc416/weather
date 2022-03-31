<template>
  <img :src="imageSource" alt="" />
</template>

<script>
import { computed } from "@vue/runtime-core";
export default {
  props: ["code"],
  setup() {
    const imageSource = computed(() => {
      return require("../../assets/backgrounds/foggy.png");
    });

    return { imageSource };
  },
};
</script>

<style scoped>
img {
  width: 100vw;
  z-index: -2;
  position: relative;
}
</style>