<template>
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
</template>

<script>
export default {
  name: "InfoCard",
  props: {
    attributes: {
      type: Array,
      required: true,
    },
    abilities: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.info {
  align-items: flex-start;
  background-color: rgb(var(--card-bg));
  border-radius: 5px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  margin: 0;
  padding: 10px 5px;
  max-width: 320px;
  height: auto;
  width: 100%;
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
  p {
    font-size: 0.8rem;
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
    flex-flow: column wrap;
    align-content: center;
  }
}
</style>