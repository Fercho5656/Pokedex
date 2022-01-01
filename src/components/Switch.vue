<template>
  <input type="checkbox" class="switch" />
</template>

<script>
export default {
  name: "Switch",
};
</script>

<style scoped>
.switch {
  --size: 25px;
  appearance: none;
  display: flex;
  justify-content: flex-start;
  width: calc(var(--size) * 2);
  height: var(--size);
  border-radius: 100px;
  background-color: gainsboro;
  transition: background-color 0.2s linear;
}

.switch:checked {
  background-color: #04a9f1;
  justify-content: flex-end;
}

.switch::after {
  position: absolute;
  content: "";
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  background-color: white;
  border: 1px solid gainsboro;
}
</style>