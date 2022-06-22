<template>
  <p>Discover about your favorite</p>
  <p>Pokémon</p>
  <button>Search Now</button>
  <div class="random-pokemon">
    <PokemonEntries :pokemon-name="pokemon.pokemonName" :pokedex-entries="pokemon.pokedexEntries" />
    <img :src="pokemon.pokemonDefaultSprite" alt="" srcset="">
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import PokemonEntries from '../components/PokemonEntries.vue'
import usePokemon from '../composables/usePokemon'

const POKEMON_QUANTITY = 905
const randomPokemonNumber = Math.floor(Math.random() * POKEMON_QUANTITY) + 1
const pokemon = reactive(usePokemon(randomPokemonNumber))
</script>

<style scoped>
  .random-pokemon {
    display: flex;
    flex-flow: row wrap-reverse;
    justify-content: center;
  }

  .random-pokemon > img {
    max-width: 300px;
  }
</style>