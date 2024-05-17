<script setup>
const Bruno = () => {
  alert('Вынужден признать, ты слишком хорош!\nЭто пасхалка № 8!')
};
</script>

<template>
    <div class="my-20 @container scroll-mt-4" id="best">
        <h2 class="uppercase text-4xl font-bold text-center mb-8">Портфолио лучших</h2>
        <div class="grid gap-4 @sm:grid-cols-1 @2xl:grid-cols-2 @sm:w-full @2xl:w-full @7xl:w-2/3 m-auto rounded-box">
            <div v-animateonscroll="{ enterClass: 'swingin', leaveClass: 'swingout' }" class="duration-1000 delay-300 card w-full bg-base-100 shadow-xl image-full">
                <figure><img src="@/assets/bestdev/dev1-min.png" alt="best" class="duration-500" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">Dennis Snellenberg</h2>
                    <p>Фрилансер, дизайнер и разработчик<br>Мастер микро-анимаций</p>
                    <div class="card-actions justify-end">
                        <a class="btn text-lg" href="https://dennissnellenberg.com/" target="_blank" >Изучить</a>
                    </div>
                </div>
            </div>
            <div v-animateonscroll="{ enterClass: 'swingin', leaveClass: 'swingout' }" class="duration-1000 delay-300 card w-full bg-base-100 shadow-xl image-full">
                <figure><img src="@/assets/bestdev/dev2-min.png" alt="best" class="duration-500" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">Wisnu Wicaksono</h2>
                    <p>Креативный разработчик из Индонезии<br>Создатель редактора-портфолио</p>
                    <div class="card-actions justify-end">
                        <a class="btn text-lg" href="https://wiscaksono.com/" target="_blank" >Изучить</a>
                    </div>
                </div>
            </div>
            <div v-animateonscroll="{ enterClass: 'swingin', leaveClass: 'swingout' }" class="duration-1000 delay-300 card w-full bg-base-100 shadow-xl image-full">
                <figure><img src="@/assets/bestdev/dev4-min.png" alt="best" class="duration-500" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">Jesse Zhou</h2>
                    <p>Дизайнер, менеджер и любящий рамен разработчик<br>Владелец самого вкусного портфолио</p>
                    <div class="card-actions justify-end">
                        <a class="btn text-lg" href="https://jesse-zhou.com/" target="_blank" >Изучить</a>
                    </div>
                </div>
            </div>
            <div v-animateonscroll="{ enterClass: 'swingin', leaveClass: 'swingout' }" class="duration-1000 delay-300 card w-full bg-base-100 shadow-xl image-full">
                <figure><img src="@/assets/bestdev/dev3-min.png" alt="best" class="duration-500" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title gap-0"><font-awesome-icon icon="fa-solid fa-b" class="text-2xl cursor-pointer" @click="Bruno" />runo Simon</h2>
                    <p>Легендарное портфолио! <br>Управляй игрушечной машинкой</p>
                    <div class="card-actions justify-end">
                        <a class="btn text-lg" href="https://bruno-simon.com/" target="_blank" >Изучить</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>

.image-full:hover img {
    transform: scale(1.2);
}

.swingin {
    opacity: 1;
    transform-origin: top;
    transform: rotateY(0deg) perspective(200px);
}

.swingout {
    opacity: 0;
    transform-origin: top;
    transform: rotateY(15deg) perspective(200px);
}
</style>
