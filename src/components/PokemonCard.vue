<template>
  <div class="card" @click="redirect">
    <picture>
      <img class="pokemon_img" :src="img" :alt="name" />
    </picture>
    <hr />
    <div class="card_content">
      <p class="pokemon_number">#{{ pokedexNumber }}</p>
      <p class="pokemon_name">{{ pokemonName }}</p>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
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
  setup(props) {
    const router = useRouter();
    const redirect = () => {
      router.push(`/pokemon/${props.number}`);
    };
    return {
      redirect,
    };
  },
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
.card {
  display: flex;
  justify-content: center;
  flex-flow: column nowrap;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  margin: 10px;
  transition: 0.2s ease-in-out;
}

.card:hover {
  box-shadow: 0px 0px 20px rgba(var(--text), 0.4);
  cursor: pointer;
  transform: translateY(-5px);
}

picture {
  border-radius: 10px 10px 0 0;
  background: rgb(var(--background-accent));
}
.pokemon_img {
  height: 250px;
}

hr {
  margin: 0;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.card_content {
  background-color: rgb(var(--background-accent));
  border-radius: 0 0 10px 10px;
  padding-left: 10px;
}

.pokemon_number {
  font-size: 1.25rem;
}

.pokemon_name {
  font-size: 1.5rem;
  font-weight: 700;
}
</style>