<template>
  <div class="footer p-2 text-center">{{ title }}</div>
</template>
<script>
export default {
  props: ["title"],
};
</script>
<style scoped>
.footer {
  padding: 10px;
  width: 100%;
  height: 60px;
  line-height: 60px;
}
</style>