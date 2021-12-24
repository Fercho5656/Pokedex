<template>
  <Navbar />
  <router-view />
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Sora:wght@400;700&display=swap");
</style>