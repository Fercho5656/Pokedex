<template>
  <main class="container">
    <h1>About</h1>
    <section id="contents">
      <h2>Table of Contents</h2>
      <ul>
        <li>
          <p><a href="#whatIsThis">What is this?</a></p>
        </li>
        <li>
          <p><a href="#why">Why?</a></p>
        </li>
        <li>
          <p><a href="#how">How?</a></p>
        </li>
        <li>
          <p><a href="#sourceCode">Source Code</a></p>
        </li>
      </ul>
    </section>
    <section id="whatIsThis">
      <h2>What is this?</h2>
      <p>
        Vuedex is a simple Vue.js application that uses the
        <a href="https://pokeapi.co/" target="_blank" ref="noopener nonreferer"
          >PokéAPI REST API</a
        >
        to fetch information about a Pokémon and display it in a card format
        used to display the Pokemon's attributes and abilities.
      </p>
    </section>
    <section>
      <h2 id="why">Why?</h2>
      <p>
        Despite there's a lot and more complete sites out there, I wanted to
        make a simple one that I could use to learn Vue.js. It's a good excuse
        to learn how to use Vue.js components, routing, global state and a lot
        of more concepts being used in daily web sites.
      </p>
      <p>
        Vuedex is a work in progress. It is not a complete Pokédex. It is a
        proof of concept.
      </p>
    </section>
    <section>
      <h2 id="how">How?</h2>
      <p>
        Besides Vue as frontend framework and the PokéAPI REST API, I used the
        following libraries:
      </p>
      <ul class="libraries">
        <li>
          <p>
            <a
              href="https://vue-echarts.dev/"
              target="_blank"
              ref="noopener nonreferer"
              >Vue-ECharts</a
            >
            to display the Pokémon's base stats in a chart.
          </p>
        </li>
      </ul>
    </section>
    <section>
      <h2 id="sourceCode">Source code</h2>
      <p>
        The source code is available on
        <a
          href="https://github.com/Fercho5656/Pokedex"
          target="_blank"
          ref="noopener nonreferer"
          >this repo.</a
        >
        and it's open to everyone who wants to contribute.
      </p>
    </section>
  </main>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
main {
  padding: 20px;
}

h1 {
  font-size: 2.5rem;
  margin: 0;
}

h2 {
  font-size: 1.5rem;
  margin: 0;
}

p {
  font-size: 1.2rem;
  margin: 0;
}

section {
  margin-bottom: 5ch;
}

ul:not(.libraries) {
  list-style: none;
  padding: 0;
}

li {
  margin-left: 5ch;
}
</style>