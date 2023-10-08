<script setup>

import Model from "@/components/Model.vue";
</script>

<template>
  <header>
    <div></div>
  </header>
  <main>
    <Model :path="path"
           :camera-x="cameraX" :camera-y="cameraY" :camera-z="cameraZ"
           :camera-fov="cameraFov" :camera-near="cameraNear" :camera-far="cameraFar"
           :model-x="modelX" :model-y="modelY" :model-z="modelZ"
           :scale="scale"/>
  </main>
  <footer>
    <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">CC BY-NC-SA 4.0 DEED</a>
  </footer>
</template>
<script>
export default {
  name: "Index",
  data() {
    return {
      path: "models/chair.glb",
      cameraX: 200,
      cameraY: 200,
      cameraZ: -200,
      cameraFov: 45,
      cameraNear: 0.1,
      cameraFar: 1000,
      modelX: 0,
      modelY: 0,
      modelZ: 0,
      scale: 30
    }
  },
  created() {
    if (this.$route.query.path)
      this.path = this.$route.query.path
    if (this.$route.query.cameraX)
      this.cameraX = this.$route.query.cameraX
    if (this.$route.query.cameraY)
      this.cameraY = this.$route.query.cameraY
    if (this.$route.query.cameraZ)
      this.cameraZ = this.$route.query.cameraZ
    if (this.$route.query.cameraFov)
      this.cameraFov = this.$route.query.cameraFov
    if (this.$route.query.cameraNear)
      this.cameraNear = this.$route.query.cameraNear
    if (this.$route.query.cameraFar)
      this.cameraFar = this.$route.query.cameraFar
    if (this.$route.query.modelX)
      this.modelX = this.$route.query.modelX
    if (this.$route.query.modelY)
      this.modelY = this.$route.query.modelY
    if (this.$route.query.modelZ)
      this.modelZ = this.$route.query.modelZ
    if (this.$route.query.scale)
      this.scale = this.$route.query.scale
  },
  methods: {

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

footer {
  position: absolute;
  bottom: 10px;
  left: 10px;
  padding: 10px;
  background-color: var(--color-transparent);
  backdrop-filter: blur(10px);
  border-radius: 3px;
}
.bottom a {
  font-family: roboto condensed,system-ui;
  font-size: 1em;
  font-style: normal;
  font-weight: 700;
  text-transform: uppercase;
}
</style>