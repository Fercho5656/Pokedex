<template>
  <Navbar />
  <router-view />
  <Footer />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Navbar,
    Footer
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Sora:wght@400;700&display=swap");
</style>