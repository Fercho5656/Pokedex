<template>
  <input type="checkbox" class="switch" :checked="theme" @click="switchTheme" />
</template>

<script>
import { computed } from "@vue/reactivity";
import store from "../store/index";
export default {
  name: "Switch",
  setup() {
    // Get the current theme from the store
    const theme = computed(() => store.getters.getTheme() === "dark");
    // Toggle the theme
    const switchTheme = () => {
      if (store.state.theme)
        store.mutations.setTheme(theme.value ? "light" : "dark");
    };
    return { theme, switchTheme };
  },
};
</script>

<style scoped>
.switch {
  --size: 25px;
  appearance: none;
  display: flex;
  justify-content: flex-start;
  width: calc(var(--size) * 2);
  height: var(--size);
  border-radius: 100px;
  background-color: gainsboro;
  transition: background-color 0.2s linear;
}

.switch:checked {
  background-color: #04a9f1;
  justify-content: flex-end;
}

.switch::after {
  position: absolute;
  content: "";
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  background-color: white;
  border: 1px solid gainsboro;
}
</style>