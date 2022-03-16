import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);

// ----------- PrimeVue ------
import PrimeVue from 'primevue/config';
import Dialog from 'primevue/dialog';
import Message from 'primevue/message';
import TabMenu from 'primevue/tabmenu';

app.use(PrimeVue);
app.component('Dialog', Dialog);
app.component('Message', Message);
app.component('TabMenu', TabMenu);
// ----------- /PrimeVue ------

// ----------- Vue Router ------
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./Home.vue";
import About from "./About.vue";
import NotFound from "./NotFound.vue";

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/:pathMatch(.*)*', component: NotFound }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

app.use(router)
// ----------- /Vue Router ------

app.mount("#app");