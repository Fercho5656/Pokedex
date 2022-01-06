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

:root {
  --background-dark: #222134;
  --background-dark-light: #4a485e;
  --background-light: #fff;
  --background-light-dark: #ccc;
  --text-dark: #fff;
  --text-light: #222134;
}

/**Reset Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/**Light theme*/
body,
footer,
nav {
  background-color: var(--background-light);
  color: var(--text-light);
}

p,
h1,
h2,
h3,
h4,
h5,
h6,
a,
span,
svg {
  color: var(--text-light);
}

a:hover {
  text-decoration: underline;
  text-decoration-color: var(--text-light);
}

/**Dark theme */
.dark body,
.dark footer,
.dark nav {
  background-color: var(--background-dark);
  color: var(--text-dark);
}

.dark p,
.dark h1,
.dark h2,
.dark h3,
.dark h4,
.dark h5,
.dark h6,
.dark a,
.dark span,
.dark svg {
  color: var(--text-dark);
}

.dark a:hover {
  text-decoration: underline;
  text-decoration-color: var(--text-dark);
}
</style>