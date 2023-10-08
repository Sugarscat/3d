<script setup>

import Model from "@/components/Model.vue";
</script>

<template>
  <header>
    <div></div>
  </header>
  <main>
    <Model path="models/Chair.glb" :modelY="-10" :scale="30"/>
  </main>
  <div class="bottom">
    <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">CC BY-NC-SA 4.0 DEED</a>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      
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

.bottom {
  position: absolute;
  bottom: 10px;
  left: 10px;
  padding: 10px;
  background-color: var(--color-transparent);
  backdrop-filter: blur(10px);
  border-radius: 3px;
}
.bottom a {
  font-family: roboto condensed;
  font-size: 1em;
  font-style: normal;
  font-weight: 700;
  text-transform: uppercase;
}
</style>
