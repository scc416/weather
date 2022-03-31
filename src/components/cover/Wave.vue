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
  top: 20vw;
  left: -5vw;
  z-index: 0;
  color: #fff;
}

.wave {
  height: 0;
}

.wave:before {
  border-bottom: 15vw solid #fff;
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 30vw;
  background-size: 60vw 120vw;
  background-image: radial-gradient(
    circle at 30vw -45vw,
    transparent 60vw,
    #fff 63vw
  );
}

.wave:after {
  border-bottom: 15vw solid #fff;
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 45vw;
  background-size: 120vw 120vw;
  background-image: radial-gradient(
    circle at 30vw 78vw,
    #fff 60vw,
    transparent 63vw
  );
}
</style>