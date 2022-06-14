<template>
  <p>Discover about your favorite</p>
  <p>Pokémon</p>
  <button>Search Now</button>
  <!-- <img :src="pokemon.pokemonDefaultSprite" alt="" srcset=""> -->
  <PokemonEntries :pokemon-name="pokemon.pokemonName" :pokedex-entries="pokemon.pokedexEntries" />
</template>

<script setup>
import { reactive } from 'vue'
import PokemonEntries from '../components/PokemonEntries.vue'
import usePokemon from '../composables/usePokemon'

const randomPokemonNumber = Math.floor(Math.random() * 905) + 1
const pokemon = reactive(usePokemon(randomPokemonNumber))
console.log(pokemon)
</script>

<style>
</style>