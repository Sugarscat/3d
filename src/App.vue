<script setup>

import Model from "@/components/Model.vue";
</script>

<template>
  <header>

  </header>
  <main>
    <Model/>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

main {
  overflow: hidden;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
}
</style>
