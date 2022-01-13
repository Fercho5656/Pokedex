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

/**Reset Styles */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  transition: all 0.2s linear;
}

/**Light theme*/
:root {
  --background: 255, 255, 255; /* rgb(255, 255, 255) */
  --background-accent: 245, 245, 245; /* rgb(245, 245, 245) */
  --text: 34, 33, 52; /* rgb(34, 33, 52) */
  --card-bg: 48, 167, 215; /* rgb(48, 167, 215) */
}

/**Dark theme */
.dark {
  --background: 34, 33, 52; /* rgb(34, 33, 52) */
  --background-accent: 43, 43, 43; /* rgb(43, 43, 43) */
  --text: 255, 255, 255; /* rgb(255, 255, 255) */
  background-color: rgb(var(--background));
}

html,
main,
body,
header,
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

/** Global Styles */
.container {
  width: 100%;
  padding-right: 0.75rem;
  padding-left: 0.75rem;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}
@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}
@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}
@media (min-width: 1400px) {
  .container {
    max-width: 1320px;
  }
}

a:hover {
  text-decoration: underline;
  text-decoration-color: rgb(var(--text));
}
</style>