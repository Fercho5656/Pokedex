<template>
  <Loading v-if="isLoading" />
  <main class="container">
    <h1>Pokemon List</h1>
    <div class="grid">
      <template v-for="pokemon in pokemonList.results" :key="pokemon.name">
        <PokemonCard
          :img="pokemon.img"
          :name="pokemon.name"
          :number="pokemon.number"
        />
      </template>
    </div>
  </main>
</template>

<script>
import { onMounted, ref } from "vue";
import { getPokemonList } from "../services/pokemon";
import PokemonCard from "../components/PokemonCard.vue";
import Loading from "../components/Loading.vue";
export default {
  components: { PokemonCard, Loading },
  name: "PokemonList",
  setup() {
    const pokemonList = ref([]);
    const isLoading = ref(null);
    // Fetch the pokemon list
    onMounted(async () => {
      isLoading.value = true;
      pokemonList.value = await getPokemonList();
      isLoading.value = false;
    });

    return { pokemonList, isLoading };
  },
};
</script>

<style scoped>
main {
  padding: 20px;
}
.grid {
  display: grid;
  grid-template: repeat(auto-fill, minmax(300px, 1fr)) / repeat(
      auto-fill,
      minmax(300px, 1fr)
    );
  grid-gap: 25px 20px;
  padding: 50px 0;
  justify-items: center;
  align-items: center;
}
</style>