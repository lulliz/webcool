<script setup>
import { RouterView } from 'vue-router'
import { onMounted, onUnmounted, ref } from 'vue'
import { themeChange } from 'theme-change'
import { useInfoStore } from '@/stores/info.js'
const infoStore = useInfoStore()


onMounted(() => {
  if (typeof exports != "undefined") {
    themeChange: themeChange
  } else {
    var selectedTheme = localStorage.getItem("theme");
    if (selectedTheme) {
      document.documentElement.setAttribute("data-theme", selectedTheme);
    }
    themeChange(false);
  }
  document.addEventListener('keydown', handleKonamiCode)
  window.addEventListener('mousemove', handleMouseMove)
})

// кнопки переключения 
const ToggleHTML = () => {
  infoStore.show_html = infoStore.show_html === true ? false : true
}

const ToggleCSS = () => {
  infoStore.show_css = infoStore.show_css === true ? false : true
  const styleSheets = document.styleSheets;
  if (infoStore.show_css == false) {
    for (let i = styleSheets.length - 1; i >= 0; i--) {
      styleSheets[i].disabled = true;
    }
  }
  else {
    for (let i = styleSheets.length - 1; i >= 0; i--) {
      styleSheets[i].disabled = false;
    }
  }
}

const ToggleAnim = () => {
  infoStore.show_anim = infoStore.show_anim === true ? false : true
}

const ToggleFont = () => {
  infoStore.show_font = infoStore.show_font === true ? false : true
  const elements = document.querySelectorAll("*");
  if (infoStore.show_font == true) {
    for (const element of elements) {
      element.style.fontFamily = "'Nunito', sans-serif";
    }
  }
  else {
    for (const element of elements) {
      element.style.fontFamily = "'Amatic SC', sans-serif";
    }
  }
}

const ToggleDesktop = () => {
  if (infoStore.show_desktop === true) {
    return;
  }
  infoStore.show_desktop = !infoStore.show_desktop;
  infoStore.show_tablet = false;
  infoStore.show_mobile = false;
};

const ToggleTablet = () => {
  if (infoStore.show_tablet === true) {
    return;
  }
  infoStore.show_tablet = !infoStore.show_tablet;
  infoStore.show_desktop = false;
  infoStore.show_mobile = false;
};

const ToggleMobile = () => {
  if (infoStore.show_mobile === true) {
    return;
  }
  infoStore.show_mobile = !infoStore.show_mobile;
  infoStore.show_desktop = false;
  infoStore.show_tablet = false;
};

// пасхалка в консоле
console.log('Внимателен будь, мой юный друг, осталось немного, а это пасхалка № 3')


// пасхалка конами-код
const konamiCode = 'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba'
const konamiInput = ref('')

const handleKonamiCode = (e) => {
  konamiInput.value += e.key
  console.log(konamiInput.value)
  if (konamiInput.value === konamiCode) {
    alert('Конами-пасхалка, да ты хорош! Кстати, это была № 5')
    konamiInput.value = ''
  } else if (!konamiCode.startsWith(konamiInput.value)) {
    konamiInput.value = ''
  }
}

onUnmounted(() => {
  document.removeEventListener('keydown', handleKonamiCode)
  window.removeEventListener('mousemove', handleMouseMove)
})


const msgWBot = ref('Привет, меня зовут Вебушка!<br>Я спратяла 8 пасхалок по всему сайту, твоя задача их отыскать')
const msgCounter = ref(0)
const msgShow = ref(false)
const WebBot = () => {
  msgShow.value = true
  msgCounter.value += 1
  if (msgCounter.value == 2) {
    msgWBot.value = 'Кажется, нужно нажать ещё один раз...'
  }
  if (msgCounter.value == 3) {
    msgWBot.value = 'А вот и пасхалка №7! <br>Ещё одна осталась :)'
  }
  if (msgCounter.value >= 4) {
    msgWBot.value = 'Больше тут ничего нет :)'
    setTimeout(() => {
      msgShow.value = false
    }, 2500)
  }
};


// работа с курсором
const cursorPosition = ref({ x: 0, y: 0 })

// Функция для обновления позиции курсора
const updateCursorPosition = (event) => {
  cursorPosition.value.x = event.clientX - 10
  cursorPosition.value.y = event.clientY - 8
}

// Обработчик события движения мыши
const handleMouseMove = (event) => {
  updateCursorPosition(event)
}

</script>

<template>
  <div class="h-full">
    <div class="cursor" :style="{
      left: `${cursorPosition.x}px`,
      top: `${cursorPosition.y}px`,
    }"></div>

    <!-- Пасхалка № 1. Ух ты, быстро ты меня нашёл :)  -->
    <select v-show="infoStore.show_html" data-choose-theme
      class="hidden lg:flex fixed top-4 right-4 select select-bordered w-32 z-50">
      <option value="emerald">Light</option>
      <option value="dracula">Dark</option>
      <option value="business">Business</option>
      <option value="lofi">Minimal</option>
    </select>


    <div class="tablet my-4 mx-auto @container "
      :class="{ 'mockup-browser border border-base-300': !infoStore.show_desktop, 'w-[1024px]': infoStore.show_tablet, 'w-[450px]': infoStore.show_mobile }">
      <div v-show="infoStore.show_tablet || infoStore.show_mobile" class="mockup-browser-toolbar">
        <div class="input border border-base-300 leading-7">https://shpcool.ru</div>
      </div>
      <div class="flex justify-center @sm:p-4 @2xl:p-4 @6xl:p-0 pt-16 overflow-scroll"
        :class="{ 'border-t border-base-300 custom-h': !infoStore.show_desktop }">
        <RouterView v-show="infoStore.show_html" />
      </div>
    </div>

    <div class="card shadow p-2 gap-2 fixed top-1/2 -translate-y-1/2 right-2 hidden lg:flex backdrop-blur-sm">
      <button @click="ToggleHTML" class="btn btn-outline btn-square shadow"
        :class="{ 'btn-active': !infoStore.show_html }"><font-awesome-icon icon="fa-solid fa-code"
          class="text-xl cursor-pointer" /></button>
      <button v-if="infoStore.show_css == true" onclick="ask_css.showModal()"
        class="btn btn-outline btn-square shadow"><font-awesome-icon icon="fa-solid fa-brush"
          class="text-xl cursor-pointer" /></button>
      <!-- <button @click="ToggleAnim" class="btn btn-outline btn-square shadow"><font-awesome-icon icon="fa-solid fa-a"
          class="text-xl cursor-pointer" /></button> -->
      <button @click="ToggleFont" class="btn btn-outline btn-square shadow"
        :class="{ 'btn-active': !infoStore.show_font }"><font-awesome-icon icon="fa-solid fa-f"
          class="text-xl cursor-pointer" /></button>
      <button v-if="infoStore.show_css == false" @click="ToggleCSS" class="btn btn-outline btn-error">Вернуть
        стили!</button>
    </div>
    <div class="relative z-10">
      <div v-show="infoStore.show_html"
        class="card w-fit shadow p-2 gap-2 fixed top-1/2 -translate-y-1/2 left-2 hidden lg:flex backdrop-blur-sm">
        <button @click="ToggleDesktop" class="btn btn-outline btn-square shadow"
          :class="{ 'btn-active': infoStore.show_desktop }"><font-awesome-icon icon="fa-solid fa-display"
            class="text-xl cursor-pointer" /></button>
        <button @click="ToggleTablet" class="btn btn-outline btn-square shadow"
          :class="{ 'btn-active': infoStore.show_tablet }"><font-awesome-icon icon="fa-solid fa-tablet-screen-button"
            class="text-xl cursor-pointer" /></button>
        <button @click="ToggleMobile" class="btn btn-outline btn-square shadow"
          :class="{ 'btn-active': infoStore.show_mobile }"><font-awesome-icon icon="fa-solid fa-mobile-screen"
            class="text-xl cursor-pointer" /></button>
      </div>
    </div>

    <dialog id="ask_css" class="modal modal-bottom sm:modal-middle">
      <div class="modal-box">
        <h3 class="font-bold text-lg">Hello!</h3>
        <p class="py-4">Эта кнопка отключает все стили на странице!<br>Ты уверен, что хочешь её использовать?</p>
        <p class="text-xs">Если не сможешь отыскать, как включить всё обратно, просто обнови страницу :)</p>
        <div class="modal-action">
          <form method="dialog" class="flex justify-between w-2/3 m-auto">
            <button class="btn btn-accent">Я не готов</button>
            <button @click="ToggleCSS" class="btn btn-error">Отключить стили!</button>
          </form>
        </div>
      </div>
    </dialog>

    <div v-show="infoStore.show_html">
      <img @click="WebBot" src="@/assets/logo.png" alt="help"
        class="w-32 fixed bottom-4 right-2 anim-float cursor-pointer drop-shadow-md">
      <div v-show="msgShow" class="chat chat-end w-80 fixed bottom-24 right-24">
        <div class="chat-bubble drop-shadow-md p-4"><span v-html="msgWBot"></span></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-h {
  height: calc(100vh - 5em);
}

.anim-float {
  animation: float 5s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translateY(0px) scale(1.1);
  }

  50% {
    transform: translateY(8px) scale(1);
  }

  100% {
    transform: translateY(0px) scale(1.1);
  }
}


.cursor {
  position: fixed;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: rgba(14, 150, 240, 0.5);
  box-shadow: 0 0 20px rgba(14, 150, 240, 0.8);
  pointer-events: none;
  z-index: 9999;
  animation: colors 8s infinite both;
}

@keyframes colors {
  0% {
    filter: hue-rotate(0deg);
  }

  100% {
    filter: hue-rotate(360deg);
  }
}

.cursor:before {
  content: '';
  position: absolute;
  background: #2696E8;
  width: 50px;
  height: 50px;
  opacity: 0.2;
  transform: translate(-30%, -30%);
  border-radius: 50%;
}
</style>
