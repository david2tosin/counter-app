<template>
  <div class="not-found">
    <h1>404</h1>
    <p>Page not be found.</p>
    <router-link to="/">Go back home</router-link>
  </div>
</template>

<style>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  font-size: 1.5rem;
}

.back-link {
  margin-top: 1rem;
  font-size: 1.2rem;
  text-decoration: none;
  color: #2c3e50;
}
</style>

<script>
import { RouterLink } from "vue-router";
export default {
  name: "NotFound",
  components: {
    RouterLink,
  },
};
</script>