<script setup>
// пасхалка по клику на сердечко
const HeartHint = () => {
    alert('Ух ты, а вот и пасхалка № 4, продолжай в том же духе!')
};
</script>

<template>
    <footer class="footer footer-center p-10 bg-neutral text-neutral-content">
        <aside>
            <img src="../assets/logo_shp.png" alt="logo shp" class="w-20">
            <p class="font-bold text-xl">Школа Программистов</p>
        </aside>
        <nav>
            <div class="grid grid-flow-col gap-4">
                <a href="https://vk.com/shpteam" target="_blank" class="text-2xl"><font-awesome-icon :icon="['fab', 'vk']" /></a>
                <a href="https://t.me/mshpschool" target="_blank" class="text-2xl"><font-awesome-icon :icon="['fab', 'telegram']" /></a>
                <a href="https://www.youtube.com/channel/UCdvgfq_L3XXW9dXm7jSBnlw" target="_blank" class="text-2xl"><font-awesome-icon :icon="['fab', 'youtube']" /></a>
            </div>
            <p class="mt-2 text-xs">Made with <font-awesome-icon icon="fa-solid fa-heart"
          class="transition duration-300 hover:text-red-500 cursor-pointer" @click="HeartHint" /> by LT<br>Copyright © 2024</p>
        </nav>
    </footer>
</template>