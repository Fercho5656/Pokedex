<template>
  <span>{{ type }}</span>
</template>

<script>
export default {
  name: "Badge",
  props: {
    type: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
span {
  border-radius: 5px;
  color: rgb(var(--text));
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.1rem;
  margin: 5px 0;
  padding: 0.5rem;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
}

/*
 * Colors
 */
.bug {
  background-color: #729f3f;
}
.dark {
  background-color: #707070;
}
.dragon {
  background-color: #53a4cf;
}
.electric {
  background-color: #eed535;
}
.fairy {
  background-color: #fdb9e9;
}
.fighting {
  background-color: #d56723;
}
.fire {
  background-color: #fd7d24;
}
.flying {
  background-color: #3dc7ef;
}
.ghost {
  background-color: #7b62a3;
}
.grass {
  background-color: #9bcc50;
}
.ground {
  background-color: #f7de3f;
}
.ice {
  background-color: #51c4e7;
}
.normal {
  background-color: #a4acaf;
}
.poison {
  background-color: #b97fc9;
}
.psychic {
  background-color: #f366b9;
}
.rock {
  background-color: #a38c21;
}
.steel {
  background-color: #9eb7b8;
}
.water {
  background-color: #4592c4;
}
</style>