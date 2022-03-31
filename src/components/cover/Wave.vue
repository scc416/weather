<template>
  <div class="cover-gradient">
    <div class="wave"></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.cover-gradient {
  position: relative;
  width: 110vw;
  left: -8vw;
  z-index: 0;
  color: #fff;
  height: 0;
  overflow-y: visible;
}

.wave::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 30vw;
  background-size: 60vw 120vw;
  background-image: radial-gradient(
    circle at 31vw -45vw,
    transparent 60vw,
    #fff 63vw
  );
}

.wave::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 48vw;
  background-size: 120vw 120vw;
  background-image: radial-gradient(
    circle at 24vw 75vw,
    #fff 60vw,
    transparent 63vw
  );
}
</style>