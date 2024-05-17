<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

const slides = [
    { id: 1, name: 'Student 1', desc: 'Short description 1' },
    { id: 2, name: 'Student 2', desc: 'Short description 2' },
    { id: 3, name: 'Student 3', desc: 'Short description 2' },
    { id: 4, name: 'Student 4', desc: 'Short description 2' },
    { id: 5, name: 'Student 5', desc: 'Short description 2' },
    // Add more slides here with their IDs, src, and alt attributes
];

const options = {
    rewind: true,
    gap: '2rem',
    type: 'loop',
    perPage: 2,
    focus: 'start',
    autoplay: true,
    pagination: false,
};

const options2 = {
    rewind: true,
    gap: '2rem',
    type: 'loop',
    perPage: 1,
    focus: 'start',
    autoplay: true,
    pagination: false,
};


</script>

<template>
    <div class="my-20 @container scroll-mt-4">
        <h2 class="uppercase text-4xl font-bold text-center mb-8">Работы учеников</h2>
        <div v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }" class="duration-700 delay-300 grid gap-1 grid-cols-1 @sm:w-full @2xl:w-full @7xl:w-2/3 m-auto rounded-box bg-neutral p-8">
            <Splide :options="options" aria-label="Students works" class="@sm:hidden @2xl:flex @2xl:visible">
                <SplideSlide v-for="slide in slides" :key="slide.id">
                    <div class="card w-full bg-base-100 shadow-xl">
                        <figure><img src="https://informatics.ru/img/intro/intro-inter-progressive.jpg"alt="website" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">{{ slide.name }}</h2>
                            <p>{{ slide.desc }}</p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-neutral">Изучить</button>
                            </div>
                        </div>
                    </div>
                </SplideSlide>
            </Splide>
            <Splide :options="options2" aria-label="Students works" class="@sm:flex @sm:visible @2xl:hidden">
                <SplideSlide v-for="slide in slides" :key="slide.id">
                    <div class="card w-full bg-base-100 shadow-xl">
                        <figure><img src="https://informatics.ru/img/intro/intro-inter-progressive.jpg"alt="website" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">{{ slide.name }}</h2>
                            <p>{{ slide.desc }}</p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-neutral">Изучить</button>
                            </div>
                        </div>
                    </div>
                </SplideSlide>
            </Splide>
        </div>
    </div>

</template>

<style scoped>
.fadein {
    opacity: 1;
    transform: translateY(0px);
}

.fadeout {
    opacity: 0;
    transform: translateY(50px);
}
</style>
