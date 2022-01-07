<template>
  <div :class="theme">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import store from "./store/index";
import { computed } from "@vue/reactivity";
export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
  setup() {
    const theme = computed(() => store.getters.getTheme());
    return { theme };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Sora:wght@400;700&display=swap");

/**Light theme*/
:root {
  --background: 255, 255, 255; /* rgb(255, 255, 255) */
  --background-accent: 245, 245, 245; /* rgb(245, 245, 245) */
  --text: 34, 33, 52; /* rgb(34, 33, 52) */
}

/**Dark theme */
.dark {
  --background: 34, 33, 52; /* rgb(34, 33, 52) */
  --background-accent: 43, 43, 43; /* rgb(43, 43, 43) */
  --text: 255, 255, 255; /* rgb(255, 255, 255) */
}

/**Reset Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  transition: color 0.2s linear;
}

body,
footer,
nav {
  background-color: rgb(var(--background));
  color: rgb(var(--text));
}

p,
pre,
h1,
h2,
h3,
h4,
h5,
h6,
a,
span,
svg {
  font-family: "Sora", sans-serif;
  color: rgb(var(--text));
}

a:hover {
  text-decoration: underline;
  text-decoration-color: rgb(var(--text));
}
</style>