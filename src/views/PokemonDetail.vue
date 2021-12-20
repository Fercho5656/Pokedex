<template>
  <div class="container">
    <h2>{{ pokemonDetail.name }} #{{ pokedexNumber }}</h2>
    <img class="img-fluid" :src="pokemonDetail.img" :alt="pokemonDetail.name" />
    <template
      v-for="stat in pokemonDetail.stats"
      :key="stat.stat.name"
    >
      <p>{{ stat.stat.name }}: {{ stat.base_stat }}</p>
    </template>
    <template v-for="type in pokemonDetail.types" :key="type.slot">
        <p>{{type.type.name}}</p>
    </template>
    <p>{{pokemonDetail.height / 10}} m</p>
    <p>{{pokemonDetail.weight / 10}} Kg</p>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import { getPokemonDetail } from "../services/pokemon";
export default {
  name: "PokemonDetail",
  setup() {
    const { id } = useRoute().params;
    const pokemonDetail = ref({});

    onMounted(async () => {
      pokemonDetail.value = await getPokemonDetail(id);
    });
    return { pokemonDetail };
  },
  computed: {
    pokedexNumber() {
      return `00${this.pokemonDetail.id}`.slice(-3);
    },
  },
};
</script>

<style scoped>
</style>