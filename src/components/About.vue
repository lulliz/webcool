<script setup>

</script>

<template>
    <div class="my-20 @container scroll-mt-4" id="about">
        <h2 class="uppercase text-4xl font-bold text-center mb-8 anchor-about">Веб-разработка в ШП</h2>
        <div class="grid gap-4 @sm:w-full @2xl:w-full @7xl:w-2/3 m-auto rounded-box">
            <ul class="@sm:hidden @2xl:grid timeline timeline-vertical">
                <li>
                    <div class="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }"
                        class="duration-700 delay-200 timeline-start md:text-end mb-10">
                        <time class="font-mono italic">Этап № 1</time>
                        <div class="text-lg font-black">Основы веб-дизайна</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, soluta illum veniam
                            incidunt voluptatibus debitis magnam nam fugiat qui illo quia nostrum provident doloribus
                            sequi numquam harum perferendis ea dolores.</p>
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div class="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }"
                        class="duration-700 delay-200 timeline-end mb-10">
                        <time class="font-mono italic">Этап № 2</time>
                        <div class="text-lg font-black">Frontend разработка. HTML & CSS</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eum rerum, alias
                            incidunt fugit molestiae cumque placeat harum itaque possimus ullam recusandae. Laudantium
                            blanditiis dolores quisquam velit officiis a fuga?</p>
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div class="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }"
                        class="duration-700 delay-200 timeline-start md:text-end mb-10">
                        <time class="font-mono italic">Этап № 3</time>
                        <div class="text-lg font-black">JavaScript</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora aliquid tempore vero
                            veritatis repudiandae provident asperiores assumenda, facere quos animi perferendis rem
                            consequuntur hic magni. Corporis esse veritatis amet. Suscipit.</p>
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div class="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }"
                        class="duration-700 delay-200 timeline-end mb-10">
                        <time class="font-mono italic">Этап № 4</time>
                        <div class="text-lg font-black">Backend разработка</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sit recusandae ex dicta,
                            corporis voluptatibus est molestiae consequuntur earum consequatur iure aliquam hic.
                            Praesentium excepturi, similique sunt optio eius reprehenderit.</p>
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div class="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }"
                        class="duration-700 delay-200 timeline-start md:text-end mb-10">
                        <time class="font-mono italic">Этап № 5</time>
                        <div class="text-lg font-black">Промышленная разработка</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum officiis neque rerum
                            architecto unde totam! Maxime illum corrupti quidem vel iusto dolorem aut! Dignissimos nemo
                            corrupti officiis suscipit quo aliquid.</p>
                    </div>
                </li>
            </ul>

            <ul class="@sm:grid @2xl:hidden timeline timeline-vertical timeline-snap-icon timeline-compact">
                <li>
                    <div class="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }"
                        class="duration-700 delay-200 timeline-end !mb-10">
                        <time class="font-mono italic">Этап № 1</time>
                        <div class="text-lg font-black">Основы веб-дизайна</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, soluta illum veniam
                            incidunt voluptatibus debitis magnam nam fugiat qui illo quia nostrum provident doloribus
                            sequi numquam harum perferendis ea dolores.</p>
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div class="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }"
                        class="duration-700 delay-200 timeline-end !mb-10">
                        <time class="font-mono italic">Этап № 2</time>
                        <div class="text-lg font-black">Frontend разработка. HTML & CSS</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eum rerum, alias
                            incidunt fugit molestiae cumque placeat harum itaque possimus ullam recusandae. Laudantium
                            blanditiis dolores quisquam velit officiis a fuga?</p>
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div class="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }"
                        class="duration-700 delay-200 timeline-end !mb-10">
                        <time class="font-mono italic">Этап № 3</time>
                        <div class="text-lg font-black">JavaScript</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora aliquid tempore vero
                            veritatis repudiandae provident asperiores assumenda, facere quos animi perferendis rem
                            consequuntur hic magni. Corporis esse veritatis amet. Suscipit.</p>
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div class="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }"
                        class="duration-700 delay-200 timeline-end !mb-10">
                        <time class="font-mono italic">Этап № 4</time>
                        <div class="text-lg font-black">Backend разработка</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sit recusandae ex dicta,
                            corporis voluptatibus est molestiae consequuntur earum consequatur iure aliquam hic.
                            Praesentium excepturi, similique sunt optio eius reprehenderit.</p>
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div class="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }"
                        class="duration-700 delay-200 timeline-end mb-10">
                        <time class="font-mono italic">Этап № 5</time>
                        <div class="text-lg font-black">Промышленная разработка</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum officiis neque rerum
                            architecto unde totam! Maxime illum corrupti quidem vel iusto dolorem aut! Dignissimos nemo
                            corrupti officiis suscipit quo aliquid.</p>
                    </div>
                </li>
            </ul>
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
