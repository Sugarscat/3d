<script setup>

import Model from "@/components/Model.vue";
</script>

<template>
  <header>
    <div></div>
  </header>
  <main>
    <div class="model-view">
      <Model class-name="model"
          :width="this.width" :height="this.height" :path="path"
          :camera-x="cameraX" :camera-y="cameraY" :camera-z="cameraZ"
          :camera-fov="cameraFov"
          :model-x="modelX" :model-y="modelY" :model-z="modelZ"
          :scale="scale"/>
    </div>
    <div class="detail-content">
      <div class="author-identification">
        <img alt="logo" src="https://sugarscat.cn/favicon.ico"/>
        <span>Sugarscat</span>
      </div>
      <div class="license">
        <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">CC BY-NC-SA 4.0 DEED</a>
      </div>
    </div>
  </main>
  <footer>

  </footer>
</template>
<script>
export default {
  name: "Index",
  data() {
    return {
      width: 340,
      height: 50,
      path: "models/chair.glb",
      cameraX: 200,
      cameraY: 200,
      cameraZ: -200,
      cameraFov: 45,
      modelX: 0,
      modelY: 0,
      modelZ: 0,
      scale: 30
    }
  },
  created() {
    const winWidth = window.innerWidth;
    if (winWidth <= 800)
      this.width = 40
    else
      this.width = 340
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
    if (this.$route.query.modelX)
      this.modelX = this.$route.query.modelX
    if (this.$route.query.modelY)
      this.modelY = this.$route.query.modelY
    if (this.$route.query.modelZ)
      this.modelZ = this.$route.query.modelZ
    if (this.$route.query.scale)
      this.scale = this.$route.query.scale
  },
  mounted() {
    window.addEventListener('resize', ()=>{
      const winWidth = window.innerWidth;
      if (winWidth <= 800)
        this.width = 40
      else
        this.width = 340
    }, false);
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
  display: flex;
  flex-direction: row;
  padding: 20px;
  gap: 30px;
}

.model-view {
  border-radius: 10px;
  overflow: hidden;
  padding: 4px;
  box-shadow: var(--ui-box-shadow);
}

.detail-content {
  width: 260px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
}

.author-identification {
  box-shadow: var(--ui-box-shadow2);
  background-color: var(--ui-el-background);
  padding: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}

.author-identification img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid var(--color-background);
}

.author-identification span {
  font-size: larger;
  font-weight: bolder;
}

.license {
  border-radius: 10px;
  box-shadow: var(--ui-box-shadow2);
  background-color: var(--ui-el-background);
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.license a {
  font-size: large;
  font-weight: bolder;
}

.model {
  border-radius: 10px;
  overflow: hidden;
}

@media (max-width: 800px) {
  main {
    flex-direction: column;
  }

  .detail-content {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
}
</style>