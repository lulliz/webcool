<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="my-20 @container scroll-mt-4" id="blog">
        <h2 class="uppercase text-4xl font-bold text-center mb-8">Наш блог</h2>
        <div
            class="flex gap-4 justify-between mb-20 @sm:flex-col @2xl:flex-row @sm:w-full @2xl:w-full @7xl:w-2/3 m-auto text-center">
            <div v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }"
                        class="duration-1000 delay-200 card w-1/3 @sm:w-full bg-base-100 shadow-xl transition duration-300 hover:shadow">
                <figure class="px-10 pt-10">
                    <img src="https://entrepreneurhandbook.co.uk/wp-content/uploads/2019/10/Website-builder.jpg.webp"
                        alt="News" class="rounded-xl h-40" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Как создавать сайты</h2>
                    <p class="my-2">Пошаговое руководство по созданию вашего первого сайта</p>
                    <div class="card-actions">
                        <button onclick="blog1.showModal()" class="btn btn-neutral">Читать</button>
                    </div>
                </div>
            </div>
            <div v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }"
                        class="duration-1000 delay-300 card w-1/3 @sm:w-full bg-base-100 shadow-xl transition duration-300 hover:shadow">
                <figure class="px-10 pt-10">
                    <img src="https://informatics.ru/img/intro/intro-inter-progressive.jpg" alt="News"
                        class="rounded-xl h-40" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Секреты Информатикса</h2>
                    <p>Сенсация! Оказывается, в Информатиксе есть целых 10 ...</p>
                    <div class="card-actions">
                        <button onclick="blog2.showModal()" class="btn btn-neutral">Читать</button>
                    </div>
                </div>
            </div>
            <div v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }"
                        class="duration-1000 delay-500 card w-1/3 @sm:w-full bg-base-100 shadow-xl transition duration-300 hover:shadow">
                <figure class="px-10 pt-10">
                    <img src="https://informatics.ru/img/intro/intro-inter-progressive.jpg" alt="News"
                        class="rounded-xl h-40" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Технологии веба</h2>
                    <p>Что стоит изучить первым делом. Погружение в веб-разработку</p>
                    <div class="card-actions">
                        <button onclick="blog3.showModal()" class="btn btn-neutral">Читать</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Модальки для блога -->
        <dialog id="blog1" class="modal modal-middle max-w-auto">
            <div class="modal-box @sm:w-[420px] @sm:m-auto @lg:w-[900px] max-w-screen-lg">
                <!-- <h3 class="font-bold text-lg">Hello!</h3> -->
                <div class="m-4">
                    <h2 class="uppercase text-2xl font-bold text-center mb-8">Как создавать сайты</h2>
                    <div class="flex gap-4">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, a odio ratione doloribus
                            blanditiis minima qui neque perferendis repellendus aliquam, at molestias accusamus tempore
                            iusto, odit quos cupiditate eum iure.</p>
                    </div>
                </div>
                <div class="modal-action">
                    <form method="dialog">
                        <p class="text-[3px] text-slate-600 text-center">А ты глазастый! Пасхалка № 6 найдена!</p>
                        <button class="btn btn-neutral">Закрыть</button>
                    </form>
                </div>
            </div>
        </dialog>
        <dialog id="blog2" class="modal modal-middle max-w-auto">
            <div class="modal-box @sm:w-[420px] @sm:m-auto @2xl:w-[900px] max-w-screen-lg">
                <!-- <h3 class="font-bold text-lg">Hello!</h3> -->
                <div class="m-4">
                    <h2 class="uppercase text-2xl font-bold text-center mb-8">Как создавать сайты 2</h2>
                    <div class="flex gap-4">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, a odio ratione doloribus
                            blanditiis minima qui neque perferendis repellendus aliquam, at molestias accusamus tempore
                            iusto, odit quos cupiditate eum iure.</p>
                    </div>
                </div>
                <div class="modal-action">
                    <form method="dialog">
                        <button class="btn btn-neutral">Закрыть</button>
                    </form>
                </div>
            </div>
        </dialog>
        <dialog id="blog3" class="modal modal-middle max-w-auto">
            <div class="modal-box @sm:w-[420px] @sm:m-auto @2xl:w-[900px] max-w-screen-lg">
                <!-- <h3 class="font-bold text-lg">Hello!</h3> -->
                <div class="m-4">
                    <h2 class="uppercase text-2xl font-bold text-center mb-8">Как создавать сайты 3</h2>
                    <div class="flex gap-4">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, a odio ratione doloribus
                            blanditiis minima qui neque perferendis repellendus aliquam, at molestias accusamus tempore
                            iusto, odit quos cupiditate eum iure.</p>
                    </div>
                </div>
                <div class="modal-action">
                    <form method="dialog">
                        <button class="btn btn-neutral">Закрыть</button>
                    </form>
                </div>
            </div>
        </dialog>
    </div>

</template>

<style scoped>
.fadein {
    opacity: 1;
    transform: translateZ(0) rotateY(0);
}

.fadeout {
    opacity: 0;
    transform: translateZ(160px) rotateY(180deg);
}
</style>
