<template>
  <CoverImage :code="weatherCode" />
  <Rain v-if="true" />
  <Wave />
</template>

<script>
import Rain from "./Rain.vue";
import Wave from "./Wave.vue";
import CoverImage from "./CoverImage.vue";

export default {
  components: { Rain, CoverImage, Wave },
};
</script>

<style>
</style>