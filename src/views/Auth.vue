<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const login = ref()
const password = ref()

const loginUser = () => {
    if (login.value != undefined && password.value != undefined) {
        if (login.value === 'shp' && password.value === 'admin' ) {
            router.push('/')
        } else {
            alert('Неверный логин или пароль')
        }
    }
}
</script>

<template>
  <div class="about base-200 mt-10 grid items-center">
    <div class="flex flex-col items-center justify-center overflow-hidden p-8">
        <h1 class="text-6xl font-semibold text-center mb-4">SHPCOOL</h1>
        
        <div class="w-full p-6 rounded-md shadow-lg bg-base-100">
            <form class="space-y-4">
                <div>
                    <label class="label">
                        <span class="text-base label-text">Логин</span>
                    </label>
                    <input type="text" v-model="login" placeholder="Введите ваш логин" required class="w-full input input-bordered" autocomplete="false" />
                </div>
                <div>
                    <label class="label">
                        <span class="text-base label-text">Пароль</span>
                    </label>
                    <input type="password" v-model="password" placeholder="Введите ваш пароль" required autocomplete="false"
                        class="w-full input input-bordered" />
                </div>
                <div>
                    <button @click="loginUser" class="btn btn-block btn-secondary text-lg">Войти</button>
                </div>
            </form>
      </div>
    </div>
  </div>
</template>

<style>

</style>
