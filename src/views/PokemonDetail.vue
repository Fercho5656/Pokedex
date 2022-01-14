<template>
  <Loading v-if="isLoading" />
  <main class="container">
    <h2 class="capitalize">{{ pokemonDetail.name }} #{{ pokedexNumber }}</h2>
    <div class="pokemon_info">
      <img
        class="img-fluid"
        :src="pokemonDetail.img"
        :alt="pokemonDetail.name"
      />
      <InfoCard :attributes="pokemonAttributes" :abilities="pokemonAbilities" />
      <div class="base_Stats">
        <!-- To be replaced with charts -->
        <h3>Base Stats</h3>
        <template v-for="stat in pokemonDetail.stats" :key="stat.stat.name">
          <p class="capitalize">{{ stat.stat.name }}: {{ stat.base_stat }}</p>
        </template>
      </div>
      <ul class="types">
        <h3>Type</h3>
        <li v-for="type in pokemonDetail.types" :key="type.slot">
          <Badge :type="type.type.name" :class="type.type.name" />
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import { getPokemonDetail } from "../services/pokemon";
import Loading from "../components/Loading.vue";
import InfoCard from "../components/InfoCard.vue";
import Badge from "../components/Badge.vue";
export default {
  name: "PokemonDetail",
  components: {
    Loading,
    InfoCard,
    Badge,
  },
  setup() {
    const { id } = useRoute().params;
    const router = useRouter();
    const pokemonDetail = ref([]);
    const pokemonAttributes = ref([]);
    const pokemonAbilities = ref([]);

    const isLoading = ref(null);

    onMounted(async () => {
      isLoading.value = true;
      //redirects to 404 if the pokemon doesn't exist
      const pokemon = await getPokemonDetail(id);
      if (!pokemon) router.push("/404");
      //get the pokemon attributes from the pokemon
      const { height, weight, abilities } = pokemon;
      pokemonAttributes.value = [
        {
          name: "Height",
          value: `${height / 10} m`,
        },
        {
          name: "Weight",
          value: `${weight / 10} kg`,
        },
      ];
      pokemonDetail.value = pokemon;
      pokemonAbilities.value = abilities;
      isLoading.value = false;
    });
    return { pokemonDetail, isLoading, pokemonAttributes, pokemonAbilities };
  },
  computed: {
    pokedexNumber() {
      return `00${this.pokemonDetail.id}`.slice(-3);
    },
  },
};
</script>

<style scoped>
main {
  padding: 20px;
}

.pokemon_info {
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(2, 1fr);
  grid-gap: 10px;
  margin-bottom: 20px;
  place-content: center;
  align-items: center;
  justify-items: center;
}

h2, h3 {
  text-align: center;
}
.capitalize {
  text-transform: capitalize;
}

.img-fluid {
  max-width: 320px;
  width: 50vw;
  height: auto;
  background-color: rgb(var(--background-accent));
  border-radius: 10px;
}

ul {
  display: inline-block;
  flex-direction: column;
}

li {
  display: block;
  width: 100%;
}

@media screen and (max-width: 425px) {
  .pokemon_info {
    grid-template: repeat(1, 1fr) / repeat(2, 1fr);
  }
}
</style>