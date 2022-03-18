<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const items = ref([
  { label: "Home", icon: "pi pi-fw pi-home", to: "/" },
  { label: "About", icon: "pi pi-fw pi-info-circle", to: "/about" },
])
</script>

<template>
  <div id="supercontainer">
    <header>
      <TabMenu :model="items" class="mt-2 ml-2" />
    </header>
    <main id="maincontainer" role="main">
      <RouterView />
    </main>
    <footer role="footer">Giuggioli.net 2022</footer>
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
