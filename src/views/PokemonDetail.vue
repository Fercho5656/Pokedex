<template>
  <Loading v-if="isLoading" />
  <main class="container">
    <h2 class="capitalize">{{ pokemonDetail.name }} #{{ pokedexNumber }}</h2>
    <div class="pokemon_info">
      <PokemonPicture :pokemon-sprite="pokemonSprite" :pokemon-name="pokemonDetail.name" :is-male="isMale"
        :is-shiny="isShiny" @change-gender="changeGender" @change-shiny="changeShiny" />
      <InfoCard :attributes="pokemonAttributes" :abilities="pokemonDetail.abilities" />
      <div class="base_Stats">
        <!-- To be replaced with charts -->
        <h3>Base Stats</h3>
        <template v-for="stat in pokemonDetail.stats" :key="stat.stat.name">
          <p class="capitalize">{{ stat.stat.name }}: {{ stat.base_stat }}</p>
        </template>
      </div>
      <ul class="types">
        <h3>Type</h3>
        <li v-for="pokemonType in pokemonDetail.types" :key="pokemonType.slot">
          <Badge :type="pokemonType.type.name" />
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
export default {
  name: "PokemonDetail",
}
</script>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { computed, onMounted, ref } from "vue";
import { getPokemonDetail } from "../services/pokemon";
import PokemonPicture from '../components/PokemonPicture.vue';
import Loading from "../components/Loading.vue";
import InfoCard from "../components/InfoCard.vue";
import Badge from "../components/Badge.vue";

const { id } = useRoute().params;
const router = useRouter();
const pokemonDetail = ref([]);
const pokemonSprites = ref();
const pokemonAttributes = ref([]);
const isLoading = ref(true);

const isMale = ref(true);
const isShiny = ref(false);
const pokemonSprite = ref();

const pokedexNumber = computed(() => {
  return `00${pokemonDetail.value.id}`.slice(-3);
});

const changeGender = () => {
  isMale.value = !isMale.value;
  changeSprite();
};

const changeShiny = () => {
  isShiny.value = !isShiny.value;
  changeSprite();
};

const changeSprite = () => {
  isMale.value
    ? isShiny.value
      ? (pokemonSprite.value = pokemonSprites.value.front_shiny)
      : (pokemonSprite.value = pokemonSprites.value.front_default)
    : isShiny.value
      ? (pokemonSprite.value =
        pokemonSprites.value.front_shiny_female ??
        pokemonSprites.value.front_shiny)
      : (pokemonSprite.value =
        pokemonSprites.value.front_female ??
        pokemonSprites.value.front_default);
};

onMounted(async () => {
  isLoading.value = true;
  //redirects to 404 if the pokemon doesn't exist
  const pokemon = await getPokemonDetail(id);
  if (!pokemon) router.push("/404");
  //get the pokemon attributes from the pokemon
  pokemonAttributes.value = [
    {
      name: "Height",
      value: `${pokemon.height / 10} m`,
    },
    {
      name: "Weight",
      value: `${pokemon.weight / 10} kg`,
    },
  ];
  pokemonDetail.value = pokemon;
  pokemonSprites.value = pokemonDetail.value.sprites.other.home;
  pokemonSprite.value = pokemonSprites.value.front_default;
  isLoading.value = false;
});
</script>

<style scoped>
main {
  width: 100vw;
  padding: 20px;
}

.pokemon_info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 20px;
  margin-bottom: 20px;
  align-items: center;
  justify-items: center;
}

h2,
h3 {
  text-align: center;
}

.capitalize {
  text-transform: capitalize;
}

ul {
  display: inline-block;
  flex-direction: column;
}

li {
  display: block;
  width: 100%;
}
</style>