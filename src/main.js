
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './style.css'

import AnimateOnScroll from 'primevue/animateonscroll';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


import {faA, faF, faB, faCode, faBrush, faDisplay, faTabletScreenButton, faMobileScreen, faHeart} from "@fortawesome/free-solid-svg-icons";
import {faVk, faTelegram, faYoutube} from '@fortawesome/free-brands-svg-icons';
library.add(faBrush, faA, faF, faB, faCode, faDisplay, faTabletScreenButton, faMobileScreen, faHeart, faVk, faTelegram, faYoutube);


const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.directive('animateonscroll', AnimateOnScroll);
app.use(createPinia())
app.use(router)

app.mount('#app')
