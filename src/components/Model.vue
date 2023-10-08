
<template>
  <div id="content"/>
</template>

<script>
import * as THREE from 'three'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"; //鼠标控制器
let scene //场景
export default {
  name: "Model",
  data() {
    return {
      camera: null,//照相机
      renderer: null,//渲染器
      raycaster: null,
      mesh: null,//物体
      mouse: null,
      onCLick: null,
      childList: null,
      light: null,//灯光
      cuModel: "", //当前选中模型
      mouseControls: null, //轨道控制
      pointLight: null, //点光源
      ambientLight: null, //环境光
      num: 0,//点击次数
    }
  },
  mounted() {
    this.init()
    window.onresize = function () {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize( window.innerWidth, window.innerHeight );
    };

  },

  methods: {
    init() {
      // 创建场景
      this.createScene()
      // 创建照相机
      this.createCamera()
      // 创建渲染器
      this.createRenderer()
      // 创建灯光
      this.createLight()
      // 创建控制器
      this.createOrbitControls();
      // 创建物体
      this.createMesh()
      // 触发
      this.render()
    },
    // 创建场景
    createScene() {
      scene = new THREE.Scene()
    },
    // 创建照相机
    createCamera() {
      this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight,
          0.1, 1000)
      this.camera.position.set(200, 200, 200)
      this.camera.lookAt(scene.position)
    },
    // 创建渲染器
    createRenderer() {
      this.renderer = new THREE.WebGLRenderer()
      this.renderer.setSize(window.innerWidth, window.innerHeight)
      this.renderer.setClearColor(new THREE.Color(0xffffff))
      document.getElementById('content').appendChild(this.renderer.domElement)
    },
    // 创建灯光
    createLight() {
      this.light = new THREE.DirectionalLight({
        color: 'red'
      })
      this.light.position.set(100, 100, 100)
      scene.add(this.light)
    },
    // 创建物体
    createMesh() {
      let lm = new Promise((resolve) => {
        let loader = new GLTFLoader();
        loader.load('/model/Chair.glb', (gltf) => {
          resolve(gltf);
        })
      })
      lm.then((res) => {
        res.scene.position.set(
            -100, 0, 0
        )
        res.scene.scale.set(20, 20, 20)
        res.scene.userData = {id: 1, name: 'bear'}
        scene.add(res.scene)
        this.render()
      })
    },
    //触发
    render() {
      this.renderer.render(scene, this.camera)
    },
    //创建轨道控制
    createOrbitControls() {
      //没有缩放阻尼
      this.mouseControls = new OrbitControls(
          this.camera,
          this.renderer.domElement
      ); //创建控件对象
      this.mouseControls.addEventListener('change', () => {
        this.renderer.render(scene, this.camera)
      })
    },
  }
}
</script>

<style scoped>
</style>
