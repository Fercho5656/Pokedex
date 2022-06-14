<template>
  <div class="card">
    <header>
      <h2>Attributes</h2>
    </header>
    <div class="info">
      <ul class="pokemon_attributes">
        <li v-for="attribute in attributes" :key="attribute.name">
          <p class="attribute_name">{{ attribute.name }}</p>
          <p class="attribute_value">{{ attribute.value }}</p>
        </li>
      </ul>
      <ul class="pokemon_abilities">
        <p class="name">Abilities</p>
        <li v-for="ability in abilities" :key="ability.name">
          <p class="ability_name">{{ ability.ability.name }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoCard",
  props: {
    attributes: {
      type: Array,
      default: () => [],
      required: true,
    },
    abilities: {
      type: Array,
      default: () => [],
      required: true,
    },
  }
};
</script>

<style scoped>
.info {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
}

.card {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
  border-radius: 10px;
  margin: 0;
  padding: 10px 5px;
  min-width: 250px;
  min-height: 250px;
  max-width: 320px;
  max-height: 320px;
}

header {
  position: relative;
  top: -5%;
  background-color: transparent;
  align-self: center;
}

ul > p {
  margin: 0.5rem 0;
}
li {
  list-style: none;
  margin: 0.5rem 0;
  text-transform: capitalize;
}

li > p:last-child {
  margin: 1rem 0;
  font-weight: 700;
  color: rgb(34, 33, 52);
}

@media screen and (max-width: 425px) {
  header {
    top: 0;
  }
  h2 {
    font-size: 1.3rem;
  }
  p {
    font-size: 1rem;
  }
  .card {
    width: 40vw;
  }
  .info {
    flex-flow: column wrap;
    align-content: center;
  }
  ul {
    flex-flow: column wrap;
  }
  li {
    margin: 0.5rem 0;
  }
  li > p:last-child {
    margin: 0.5rem 0;
    font-weight: 700;
    color: rgb(34, 33, 52);
  }
}

@media screen and (min-width: 426px) and (max-width: 768px) {
  .info {
    align-content: center;
  }
}
</style>