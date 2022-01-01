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
    Footer,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Sora:wght@400;700&display=swap");

:root {
  --background-dark: #222134;
  --background-dark-light: #4a485e;
  --background-light: #fff;
  --background-light-dark: #ccc;
  --text-dark: #fff;
  --text-light: #222134;
}
</style>