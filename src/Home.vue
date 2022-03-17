<template>
  <div>
    <div class="text-center imagenized p-5">
      <div class="col-md-5 p-lg-5 mx-auto my-5 text-white">
        <h1 class="display-4 fw-normal">Welcome</h1>
        <p class="lead fw-normal">Just a programmer's website</p>
        <router-link to="/about" class="btn btn-secondary"
          >Some words on me</router-link
        >
      </div>
    </div>
    <div class="container m-1 mt-3 text-center p-5">
      <figure class="m-2 p-1 mx-auto w-75">
        <blockquote class="blockquote">
          <p>
            Nothing to see here yet. When I'll have more free time, maybe I'll
            build a serious web site
          </p>
        </blockquote>
        <figcaption class="blockquote-footer text-end">Me</figcaption>
      </figure>
      <Message>We don't use cookies, but we use ice cream. A lot</Message>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      what: false,
    };
  },
};
</script>
<style scoped>
.imagenized {
  background-image: url("./img/bg4.jpg");
  background-size: cover;
}
</style>
