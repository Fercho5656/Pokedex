<template>
  <div class="card">
    <picture>
      <img class="pokemon_img" :src="img" :alt="name" />
    </picture>
    <div class="card_content">
      <p class="pokemon_number">#{{ pokedexNumber }}</p>
      <p class="pokemon_name">{{ pokemonName }}</p>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
export default {
  props: {
    img: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
  },
  name: "PokemonCard",
  computed: {
    //prefix zeros to the pokedex number
    pokedexNumber() {
      return `00${this.number}`.slice(-3);
    },
    pokemonName() {
      return this.name.charAt(0).toUpperCase() + this.name.slice(1);
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Sora:wght@400;700&display=swap");
.card {
  display: flex;
  justify-content: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  margin: 10px;
  transition: 0.2s ease-in-out;
}

.card:hover {
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  transform: translateY(-5px);
}

picture {
  background: #f5f5f5;
}
.pokemon_img {
  height: 250px;
}

.card_content {
  margin-left: 10px;
}

p {
  font-family: "Sora", sans-serif;
}

.pokemon_number {
  font-size: 1.25rem;
  color: #919191;
}

.pokemon_name {
  font-size: 1.5rem;
  font-weight: 700;
}
</style>