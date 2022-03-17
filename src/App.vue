<template>
  <div id="supercontainer">
    <header>
      <TabMenu :model="items" class="mt-2 ml-2" />
    </header>
    <main id="maincontainer" role="main">
      <router-view></router-view>
    </main>
    <footer role="footer">
      <Footer title="Giuggioli.net 2022" />
    </footer>
  </div>
</template>

<script>
import Footer from "./Footer.vue";
export default {
  components: {
    Footer,
  },
  data() {
    return {
      items: [
        { label: "Home", icon: "pi pi-fw pi-home", to: "/" },
        { label: "About", icon: "pi pi-fw pi-info-circle", to: "/about" },
      ],
    };
  },
};
</script>

<style scoped>
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 1rem;
  font-weight: normal;
}
#supercontainer {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
#maincontainer {
  flex-grow: 1;
  background-color: var(--surface-0);
}
</style>

/*
        { label: "Edit", icon: "pi pi-fw pi-pencil" },
        { label: "Documentation", icon: "pi pi-fw pi-file" },
        { label: "Settings", icon: "pi pi-fw pi-cog" },
*/