
<template>
  <div :class="className" id="container"/>
</template>

<script>
import * as THREE from 'three'

import Stats from 'three/addons/libs/stats.module.js';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

let scene //场景
export default {
  name: "Model",
  props: {
    className: {
      type: String,
      default: ''
    },
    width: {
      type: Number,
      required: true
    },    
    height: {
      type: Number,
      required: true
    },
    bgColor: {
      type: Number,
      default: 0xecf0f3
    },
    path: {
      type: String,
      required: true,
    },
    cameraX: {
      default: 200,
    },
    cameraY: {
      default: 200,
    },
    cameraZ: {
      default: -200,
    },
    cameraFov: {
      default: 45,
    },
    cameraNear: {
      default: 0.1,
    },
    cameraFar: {
      default: 1000,
    },
    modelX: {
      default: 0,
    },
    modelY: {
      default: 0,
    },
    modelZ: {
      default: 0,
    },
    scale: {
      default: 20,
    }
  },
  data() {
    return {
      clock: null,
      container: null,
      stats: null,
      camera: null,//照相机
      renderer: null,//渲染器
      mesh: null,//物体
      controls: null, //轨道控制
    }
  },
  mounted() {
    this.clock = new THREE.Clock()
    this.container = document.getElementById( 'container' );
    this.stats = new Stats();
    // this.container.appendChild( this.stats.dom );
    this.init()
    window.addEventListener('resize', ()=>{
      const winWidth = window.innerWidth;
      const winHeight = window.innerHeight;
      const width =  winWidth-this.width
      const height = winHeight-this.height
      this.camera.aspect = width/height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize( winWidth-this.width, winHeight-this.height );
    }, false);
    window.addEventListener('mousedown', ()=>{
      setTimeout(()=>{
        scene.background = new THREE.Color( this.bgColor );
      }, 300)
    }, false);
  },
  methods: {
    init() {
      // 创建渲染器
      this.createRenderer()
      // 创建场景
      this.createScene()
      // 创建照相机
      this.createCamera()
      // 创建控制器
      this.createControls();
      // 创建物体
      this.createMesh()
      // 触发
      this.render()
    },
    // 创建渲染器
    createRenderer() {
      const winWidth = window.innerWidth;
      const winHeight = window.innerHeight;
      this.renderer = new THREE.WebGLRenderer( { antialias: true } );
			this.renderer.setPixelRatio( window.devicePixelRatio );
			this.renderer.setSize( winWidth-this.width, winHeight-this.height );
			this.container.appendChild( this.renderer.domElement );
    },
    // 创建场景
    createScene() {
      const pmremGenerator = new THREE.PMREMGenerator( this.renderer );
      scene = new THREE.Scene()
      scene.background = new THREE.Color( this.bgColor );
			scene.environment = pmremGenerator.fromScene( new RoomEnvironment( this.renderer ), 0.04 ).texture;
    },
    // 创建照相机
    createCamera() {
      const winWidth = window.innerWidth;
      const winHeight = window.innerHeight;
      const width =  winWidth-this.width
      const height = winHeight-this.height
      this.camera = new THREE.PerspectiveCamera(this.cameraFov, width/height,
          this.cameraNear, this.cameraFar)
      this.camera.position.set(this.cameraX, this.cameraY, this.cameraZ)
    },
    // 创建物体
    createMesh() {
      const loader = new GLTFLoader();
      loader.load( this.path, ( gltf )=> {
				const model = gltf.scene;
				model.position.set( this.modelX, this.modelY, this.modelZ );
				model.scale.set(this.scale, this.scale, this.scale );
				scene.add( model );
				this.animate();
			}, undefined, ( e )=> {
				console.error( e );
			} );
    },
    //触发
    render() {
      this.renderer.render(scene, this.camera)
    },
    //创建轨道控制
    createControls() {
      this.controls = new OrbitControls( this.camera, this.renderer.domElement );
			this.controls.target.set( 0, 0.5, 0 );
			this.controls.update();
			this.controls.enablePan = false;
			this.controls.enableDamping = true;
    },
    animate() {
      requestAnimationFrame( this.animate );
      this.controls.update();
      this.stats.update();
      this.renderer.render( scene, this.camera );
    }
  }
}
</script>

<style scoped>
#container {
  position: relative;
}
</style>
