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
  --background: #fff;
  --background-accent: #4a485e;
  --text: #222134;
}

/**Dark theme */
.dark {
  --background: #222134;
  --background-accent: #ccc;
  --text: #fff;
}

/**Reset Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body,
footer,
nav {
  background-color: var(--background);
  color: var(--text);
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
  color: var(--text);
}

a:hover {
  text-decoration: underline;
  text-decoration-color: var(--text);
}
</style>