<script setup>

import Model from "@/components/Model.vue";
</script>

<template>
  <header>

  </header>
  <main>
    <Model path="models/Chair.glb" :modelY="-10" :scale="40"/>
  </main>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      z: -50,
    }
  }
}
</script>
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
  }
}
</style>
