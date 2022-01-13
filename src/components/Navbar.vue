<template>
  <header>
    <Anchor class="logo" href="/">
      <img src="../assets/logo.png" alt="logo" />
      <p>Pokédex</p>
    </Anchor>
    <nav>
      <ul>
        <li>
          <Anchor href="/pokemon">Pokémon</Anchor >
        </li>
        <li>
          <Anchor href="/about">About</Anchor >
        </li>
      </ul>
    </nav>
    <Switch />
  </header>
</template>

<script>
import Switch from "../components/Switch.vue";
import Anchor from "../components/Anchor.vue";
export default {
  name: "Navbar",
  components: {
    Switch,
    Anchor,
  },
};
</script>

<style scoped>
header {
  width: 100%;
  margin: auto;
  height: 10vh;
  display: flex;
  align-items: center;
  padding: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  position: relative;
}

.logo {
  display: flex;
  flex: 1;
  align-items: center;
}

.logo > img {
  width: 50px;
  height: auto;
  margin: 0 10px;
}

nav {
  flex: 2;
}

ul {
  display: flex;
  justify-content: space-around;
}

li {
  list-style: none;
}

li a {
  font-family: "Sora", sans-serif;
  text-decoration: none;
}

@media screen and (max-width: 425px) {
  a {
    font-size: medium;
  }
}

@media screen and (max-width: 375px) {
  a {
    font-size: small;
  }
}
</style>