<script setup>
import { ref, onMounted, onUnmounted, nextTick, computed } from 'vue';

const paragraphs = [
    "Представь, что ты создаёшь огромный город из слов, картинок и видео. Ты - архитектор этого города, который решает, как будут выглядеть дома (сайты), где будут проходить улицы (ссылки) и как люди будут перемещаться по городу (пользоваться сайтом). Чтобы стать веб-разработчиком, нужно изучить три языка: первый язык – это основа, каркас дома. Второй язык – это его внешний вид, цвет, шрифты, картинки. А третий язык – это то, что делает сайт живым, позволяет ему двигаться и реагировать на действия пользователя. Веб-разработка – это очень интересно и увлекательно. Она позволяет тебе делиться своими идеями со всем миром, создавать игры, сайты, мультфильмы, приложения. И кто знает, может быть, именно ты построишь самый крутой город в интернете!"
];

const MAX_TIME = 60;
const WORD_LENGTH = 5;

const timeLeft = ref(MAX_TIME);
const charIndex = ref(0);
const isTyping = ref(false);
const timer = ref(null);
const correctChars = ref([]);
const mistakes = ref([]);
const inputValue = ref('');
const typingText = ref('');
const inputField = ref(null);
const isStart = ref(false)

const wpm = computed(() => {
    const correctCharsCount = charIndex.value - mistakes.value.length;
    const elapsedTime = MAX_TIME - timeLeft.value;
    return elapsedTime > 0
        ? Math.round((correctCharsCount / WORD_LENGTH) / (elapsedTime / 60))
        : 0;
});

const cpm = computed(() => {
    const correctCharsCount = charIndex.value - mistakes.value.length;
    const elapsedTime = MAX_TIME - timeLeft.value;
    return elapsedTime > 0 ? Math.round(correctCharsCount / (elapsedTime / 60)) : 0;
});

const loadParagraph = () => {
    const randomIndex = Math.floor(Math.random() * paragraphs.length);
    typingText.value = paragraphs[randomIndex].split('');
};

const initTyping = () => {
    const currentChar = inputValue.value[charIndex.value];
    isStart.value = true
    if (charIndex.value < typingText.value.length - 1 && timeLeft.value > 0) {
        if (!isTyping.value) {
            // timer.value = setInterval(initTimer, 1000);
            isTyping.value = true;
        }

        if (!currentChar) {
            if (charIndex.value > 0) {
                charIndex.value--;
                if (typingText.value[charIndex.value] === ' ') {
                    mistakes.value.pop();
                }
            }
        } else {
            if (typingText.value[charIndex.value] === currentChar) {
                correctChars.value.push(charIndex.value);
            } else {
                mistakes.value.push(charIndex.value);
            }
            charIndex.value++;
        }
    } else {
        clearInterval(timer.value);
        inputValue.value = '';
        isStart.value = false
    }
};

const initTimer = () => {
    if (timeLeft.value > 0) {
        timeLeft.value--;
    } else {
        clearInterval(timer.value);
    }
};

const resetGame = () => {
    loadParagraph();
    clearInterval(timer.value);
    timeLeft.value = MAX_TIME;
    charIndex.value = 0;
    correctChars.value = [];
    mistakes.value = [];
    isTyping.value = false;
    inputValue.value = '';
    isStart.value = true;
    loadParagraph();
    inputField.value.focus();
    timer.value = setInterval(initTimer, 1000);
};


onUnmounted(() => {
    clearInterval(timer.value);
});
</script>

<template>
    <div class="grid @container scroll-mt-4 mt-20">
        <h1 class="text-4xl uppercase font-bold text-center mb-8">Проверка скорости печати</h1>
        <div v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }" class="duration-700 delay-300 flex bg-base-100 rounded-xl shadow-xl gap-4 p-4 mb-20 mx-auto @sm:w-full @2xl:w-full @7xl:w-2/3 @sm:flex-col @2xl:flex-row @7xl:flex-row">
            <div class="@sm:w-full @2xl:w-2/3 @7xl:w-2/3">
                <input type="text" class="input input-bordered w-full" ref="inputField" v-model="inputValue"
                    @input="initTyping" />
                <div v-if="isStart" class="content-box">
                    <div class="typing-text wrdbr my-4 text-lg">
                        <template v-for="(char, index) in typingText" :key="index">
                            <span :class="{
                    'text-emerald-600': correctChars.includes(index),
                    'text-orange-600': mistakes.includes(index)
                }">
                                {{ char === ' ' ? '&nbsp;' : char }}<wbr />
                            </span>
                        </template>
                    </div>
                </div>
                <div v-if="!isStart" class="flex flex-col justify-around items-center h-full">
                    <p class="text-center text-xl">Нажми кнопку "Запустить"</p>
                    <img src="@/assets/typing.svg" alt="typing" class="w-3/5">
                </div>
            </div>
            <div class="flex flex-col @sm:w-full @2xl:w-1/3 @7xl:w-1/3">
                <div class="stats border flex flex-wrap text-center">
                    <div class="stat">
                        <div class="stat-value text-error text-center">{{ mistakes.length }}</div>
                        <div class="stat-title">Число ошибок</div>
                    </div>
                    <div class="stat">
                        <div class="stat-value text-secondary text-center">{{ wpm }}</div>
                        <div class="stat-title">Слов в минуту</div>
                    </div>
                    <div class="stat">
                        <div class="stat-value text-center text-secondary">{{ cpm }}</div>
                        <div class="stat-title">Символов в минуту</div>
                    </div>
                    <div class="stat">
                        <div class="stat-value text-center">{{ timeLeft }}</div>
                        <div class="stat-title">Время</div>
                    </div>
                </div>
                <button @click="resetGame" class="btn btn-neutral mt-4">
                    Запустить
                </button>
            </div>
        </div>

    </div>
</template>
<style scoped>
.wrdbr {
    word-break: break-word;
}

.fadein {
    opacity: 1;
    filter: blur(0px);
}

.fadeout {
    opacity: 0;
    filter: blur(4px);
}
</style>