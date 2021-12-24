<template>
  <Loading v-if="isLoading"/>
  <div class="container">
    <h2>{{ pokemonDetail.name }} #{{ pokedexNumber }}</h2>
    <img class="img-fluid" :src="pokemonDetail.img" :alt="pokemonDetail.name" />
    <template v-for="stat in pokemonDetail.stats" :key="stat.stat.name">
      <p>{{ stat.stat.name }}: {{ stat.base_stat }}</p>
    </template>
    <template v-for="type in pokemonDetail.types" :key="type.slot">
      <p>{{ type.type.name }}</p>
    </template>
    <p>{{ pokemonDetail.height / 10 }} m</p>
    <p>{{ pokemonDetail.weight / 10 }} Kg</p>
  </div>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import { getPokemonDetail } from "../services/pokemon";
import Loading from "../components/Loading.vue";
export default {
  name: "PokemonDetail",
  components: {
    Loading,
  },
  setup() {
    const { id } = useRoute().params;
    const router = useRouter();
    const pokemonDetail = ref({});

    const isLoading = ref(null);

    onMounted(async () => {
      isLoading.value = true;
      //redirects to 404 if the pokemon doesn't exist
      const pokemon = await getPokemonDetail(id);
      if (!pokemon) router.push("/404");
      pokemonDetail.value = pokemon;
      isLoading.value = false;
    });
    return { pokemonDetail, isLoading };
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