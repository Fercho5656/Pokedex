<template>
  <template v-if="inNewTab">
    <a :href="href" target="_blank" ref="noopener nonreferer">
      <slot></slot>
      <p class="mx-2">
        {{ text }}
      </p>
    </a>
  </template>
  <template v-else>
    <router-link :to="href">
      <slot></slot>
      <p class="mx-2">
        {{ text }}
      </p>
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
  color: gainsboro;
  display: inline-block;
}

a:hover {
  text-decoration: underline;
  color: inherit;
}

p {
  display: inline-block;
}
</style>