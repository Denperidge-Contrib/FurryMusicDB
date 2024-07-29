import {createApp} from 'vue'
import App from './App.vue'
import {createRouter, createWebHashHistory} from 'vue-router'
import routes from './routes'
import {setupApi} from "./vendor/api";

import './scss/style.scss';
import 'bootstrap';
import {installCurrentVueInstance} from "~/vendor/vueInstance.ts";

import {createHead} from "@unhead/vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

const app = createApp(App)

const head = createHead();

app.use(router)
app.use(head)
setupApi(app)
installCurrentVueInstance(app)

app.mount('#app')
