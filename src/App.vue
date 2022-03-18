<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const items = ref([
  { label: "Home", icon: "pi pi-fw pi-home", to: "/" },
  { label: "About", icon: "pi pi-fw pi-info-circle", to: "/about" },
])


const theme = ref(localStorage.getItem("theme") ?? 0);
setTheme(theme.value);
function changeTheme() {
  theme.value++;
  setTheme(theme.value);
}
function setTheme(n) {

  if (n == 1)
    document.getElementById("prime-vue-theme").href = "https://unpkg.com/primevue/resources/themes/bootstrap4-dark-blue/theme.css";
  if (n == 2)
    document.getElementById("prime-vue-theme").href = "https://unpkg.com/primevue/resources/themes/bootstrap4-light-blue/theme.css";
  if (n == 3)
    document.getElementById("prime-vue-theme").href = "https://unpkg.com/primevue/resources/themes/vela-green/theme.css";
  if (n == 4)
    document.getElementById("prime-vue-theme").href = "https://unpkg.com/primevue/resources/themes/arya-orange/theme.css";
  if (n == 5)
    document.getElementById("prime-vue-theme").href = "https://unpkg.com/primevue/resources/themes/saga-purple/theme.css";
  if (n == 6)
    document.getElementById("prime-vue-theme").href = "https://unpkg.com/primevue/resources/themes/mdc-dark-deeppurple/theme.css";

  if (theme.value == 6)
    theme.value = 0;

  localStorage.setItem("theme", theme.value);
}
</script>

<template>
  <div id="supercontainer">
    <header>
      <div style="display:flex; flex-direction: row; justify-content:space-between;">
        <div>
          <TabMenu :model="items" class="mt-2 ml-2" />
        </div>
        <div>
          <small>
            <Button
              label="Colors"
              @click="changeTheme()"
              icon="pi pi-sun"
              class="p-button-sm m-2 p-button-rounded"
              style="font-size: smaller;"
            />
          </small>
        </div>
      </div>
    </header>
    <main id="maincontainer" role="main">
      <RouterView />
    </main>
    <footer role="footer">Giuggioli.net 2022 &nbsp;</footer>
  </div>
</template>

<style>
/*@import '@/assets/base.css'; */

#supercontainer {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
#maincontainer {
  flex-grow: 1;
  background-color: var(--surface-0);
}
footer {
  padding: 10px;
  text-align: center;
}
</style>
