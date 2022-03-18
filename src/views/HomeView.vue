<script setup>
import TheWelcome from '@/components/TheWelcome.vue'
</script>

<template>
  <div>
    <div class="text-center imagenized p-5">
      <div class="col-md-5 p-lg-5 mx-auto my-5 text-white">
        <h1 class="display-4 fw-normal">Welcome</h1>
        <p class="lead fw-normal">Just a programmer's website</p>
        <RouterLink to="/about" class="btn btn-secondary">Some words on me</RouterLink>
      </div>
    </div>
    <TheWelcome />
  </div>
</template>
<style scoped>
.imagenized {
  background-image: url("/img/bg4.jpg");
  background-size: cover;
}
</style>
