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
  width: 130vw;
  left: -6vw;
  top: 10vw;
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
  height: 34.5vw;
  background-size: 60vw 120vw;
  background-image: radial-gradient(
    circle at 30vw -45vw,
    transparent 60vw,
    #FFF 60.5vw
  );
}
.wave::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 55.5vw;
  background-size: 120vw 120vw;
  background-image: radial-gradient(
    circle at 35vw 83vw,
    #FFF 60vw,
    transparent 60.5vw
  );
}
</style>