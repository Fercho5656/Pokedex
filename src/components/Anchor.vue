<template>
  <template v-if="inNewTab">
    <a class="my-2" :href="href" target="_blank" ref="noopener nonreferer">
      <slot></slot>
    </a>
  </template>
  <template v-else>
    <router-link class="my-2" :to="href">
      <slot></slot>
    </router-link>
  </template>
</template>
<script>
export default {
  name: "Anchor",
  props: {
    href: {
      type: String,
      default: "#",
    },
    text: {
      type: String,
    },
    inNewTab: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  font-size: large;
  font-weight: 700;
  display: flex;
  align-items: center;
}

a:hover {
  text-decoration: underline;
  color: inherit;
}

p {
  display: inline-block;
}
</style>