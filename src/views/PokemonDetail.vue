<template>
  <Loading v-if="isLoading" />
  <main class="container">
    <h2 class="capitalize">{{ pokemonDetail.name }} #{{ pokedexNumber }}</h2>
    <div class="pokemon_info">
      <picture>
        <img class="img-fluid" :src="pokemonSprite" :alt="pokemonDetail.name" />
        <input type="checkbox" name="gender" :checked="isMale" @click="changeGender" />
        <input type="checkbox" name="shiny" :checked="isShiny" @click="changeShiny" />
      </picture>
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
        <li v-for="type in pokemonDetail.types" :key="type.slot">
          <Badge :type="type.type.name" />
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
    const pokemonSprites = ref();
    const pokemonAttributes = ref([]);
    const isLoading = ref(true);

    const isMale = ref(true);
    const isShiny = ref(false);
    const pokemonSprite = ref();

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
    return {
      pokemonDetail,
      isLoading,
      pokemonAttributes,
      isMale,
      isShiny,
      pokemonSprite,
      changeGender,
      changeShiny,
    };
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

picture {
  position: relative;
}

picture > input[type="checkbox"] {
  position: absolute;
  top: 0;
  appearance: none;
  width: 25px;
  height: 25px;
  font-size: 1.5em;
  cursor: pointer;
  transition: all ease-in-out 1s;
}

input[name="gender"] {
  left: 0;
}

input[name="gender"]::after {
  content: "🚺";
}

input[name="gender"]:checked::after {
  content: "🚹";
}

input[name="shiny"] {
  right: 0;
  margin-top: 0.5rem;
  transform: rotate(180deg);
}

input[name="shiny"]::after {
  opacity: 0.3;
  content: "💡";
}

input[name="shiny"]:hover:not(:checked):after {
  animation: flickerBulb 1s infinite;
}

input[name="shiny"]:checked {
  margin: 0;
  transform: rotate(-360deg);
}

input[name="shiny"]:checked::after {
  opacity: 1;
}

h2,
h3 {
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
  transition: all linear 0.5s;
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

@keyframes flickerBulb {
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
}
</style>