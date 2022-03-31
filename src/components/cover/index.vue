<template>
  <CoverImage :code="code" />
  <Rain v-if="rain" />
  <Wave />
</template>

<script>
import Rain from "./Rain.vue";
import Wave from "./Wave.vue";
import CoverImage from "./CoverImage.vue";
import { computed } from "@vue/runtime-core";

export default {
  components: { Rain, CoverImage, Wave },
  props: ["code"],
  setup() {
    const rain = computed(() => true);
    return { rain };
  },
};
</script>

<style>
</style>