<template>
  <div>
    <h1>About</h1>
    <Dialog header="Header" v-model:visible="display"> Content </Dialog>
    <a v-on:click="display = true">Show</a>
  </div>
</template>
<script>
export default {
  data() {
    return {
      display: false,
    };
  },
};
</script>
