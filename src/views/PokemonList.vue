<template>
  <h1>Pokemon List</h1>
  <div class="container">
    <template v-for="pokemon in pokemonList.results" :key="pokemon.name">
      <PokemonCard
        :img="pokemon.img"
        :name="pokemon.name"
        :number="pokemon.number"
      />
    </template>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { getPokemonList } from "../services/pokemon";
import PokemonCard from "../components/PokemonCard.vue";
export default {
  components: { PokemonCard },
  name: "PokemonList",
  setup() {
    const pokemonList = ref([]);

    // Fetch the pokemon list
    onMounted(async () => {
      pokemonList.value = await getPokemonList();
    });

    return { pokemonList };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
}
</style>