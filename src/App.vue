<template>
  <div id="app">
    <TabMenu :model="items" />
    <div></div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { label: "Home", icon: "pi pi-fw pi-home", to: "/" },
        { label: "About", icon: "pi pi-fw pi-info-circle", to: "/about" },
        { label: "Edit", icon: "pi pi-fw pi-pencil" },
        { label: "Documentation", icon: "pi pi-fw pi-file" },
        { label: "Settings", icon: "pi pi-fw pi-cog" },
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
</style>