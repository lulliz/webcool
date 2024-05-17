<script setup>

</script>

<template>
  <div class="grid min-h-screen @container">
    <div class="hero-content text-center flex flex-col w-3/4 m-auto">
      <h1 class="font-bold @sm:text-7xl @4xl:text-8xl @6xl:text-9xl anim-text slidetop">SHPCOOL</h1>
      <!-- <img src="@/assets/shpcool.png" alt="" class="w-full"> -->
      <p class="py-6 @sm:text-xl @4xl:text-2xl @6xl:text-3xl slidetop1">Привет, дорогой друг!<br>Ты готов?</p>
      <p class="text-xs text-base-100">Ищи пасхалки, они спрятаны по всему сайту. Кстати, это пасхалка № 2.</p>
      <a href="#about" class="btn btn-lg btn-neutral slidetop2">Поехали</a>
    </div>
  </div>
</template>

<style scoped>
.anim-text {
  transform: translateY(0);
  text-shadow: none;
  transition: 0.5s;
}

.anim-text:hover {
  transform: translateY(-20px);
  text-shadow: 0 10px 0 rgba(0, 0, 0, 0.2);
}

.slidetop {
  animation: slide-in-top 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s both;
}

.slidetop1 {
  animation: slide-in-right 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s both;
}

.slidetop2 {
  animation: slide-in-left 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s both;
}

@keyframes slide-in-top {
  0% {
    transform: translateY(-1000px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-in-right {
  0% {
    transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slide-in-left {
  0% {
    transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
