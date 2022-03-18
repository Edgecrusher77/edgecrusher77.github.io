import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// ----------- PrimeVue ------
import PrimeVue from 'primevue/config';
import Dialog from 'primevue/dialog';
import Message from 'primevue/message';
import TabMenu from 'primevue/tabmenu';
import Button from 'primevue/button';
app.use(PrimeVue);
app.component('Dialog', Dialog);
app.component('Message', Message);
app.component('TabMenu', TabMenu);
app.component('Button', Button);
// ----------- /PrimeVue ------

app.mount('#app')
