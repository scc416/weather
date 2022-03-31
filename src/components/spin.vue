<template>
  <div class="fullscreen">
    <span v-if="!error" class="spin"></span>
    <div v-else>
      <div class="error">Error</div>
      <div>{{ error }}</div>
    </div>
  </div>
</template>

<script setup>
defineProps(["error"]);
</script>

<style>
.error {
  font-size: 1.3em;
}

.fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #c37e93;
  color: #fff;
}

.spin {
  display: block;
  width: 40px;
  height: 40px;
  margin: 30px auto;
  border: 3px solid transparent;
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s ease infinite;
}

@keyframes spin {
  to {
    -webkit-transform: rotateZ(360deg);
  }
}
</style>