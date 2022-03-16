<template>
  <main role="main">
    <TabMenu :model="items" />
    <div>
      <router-view></router-view>
    </div>
    <Footer title="Giuggioli.net 2022" />
  </main>
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
footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  line-height: 60px;
  background-color: #f5f5f5;
}
</style>

/*
        { label: "Edit", icon: "pi pi-fw pi-pencil" },
        { label: "Documentation", icon: "pi pi-fw pi-file" },
        { label: "Settings", icon: "pi pi-fw pi-cog" },
*/