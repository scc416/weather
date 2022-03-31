<template>
  <div class="fullscreen">
    <span v-if="!error" class="spin"></span>
    <div v-else>
      <div>ERROR</div>
      <div>{{ error }}</div>
    </div>
  </div>
</template>

<script>
export default { props: ["error"] };
</script>

<style>
.fullscreen {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
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