<script>
  import { Canvas } from '@threlte/core'
  import Scene from './PhysicsScene.svelte'
  
  // Mouse tracking
  let mouse = { x: 0, y: 0 }
  let currentAccent = 0
  
  function handleMouseMove(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
  }
  
  function handleClick() {
    currentAccent = (currentAccent + 1) % 4
  }
</script>
    
<svelte:window on:mousemove={handleMouseMove} />

<div class="canvas-container" on:click={handleClick}>
  <Canvas
    shadows
    dpr={[1, 1.5]}
    gl={{ antialias: false }}
    camera={{ position: [0, 0, 15], fov: 17.5, near: 1, far: 20 }}
  >
    <Scene {mouse} {currentAccent} />
  </Canvas>
</div>

<style>
  .canvas-container {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
</style>