<template>
  <nav>
    <ul>
      <li>
        <router-link style="" to="/">Home</router-link>
      </li>
      <li>
        <router-link style="" to="/pokemon">Pokemon</router-link>
      </li>
      <li>
        <router-link style="" to="/about">About</router-link>
      </li>
      <li>
        <Switch />
      </li>
    </ul>
  </nav>
</template>

<script>
import Switch from "../components/Switch.vue";
export default {
  name: "Navbar",
  components: {
    Switch,
  },
};
</script>

<style scoped>
nav {
  background-color: #fff;
  padding: 10px;
  border-radius: 0 0 10px 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  transition: 0.2s ease-in-out;
}

ul {
  display: flex;
  justify-content: space-around;
}

li {
  list-style: none;
}

a {
  font-family: "Sora", sans-serif;
  text-decoration: none;
  color: #000;
}
</style>