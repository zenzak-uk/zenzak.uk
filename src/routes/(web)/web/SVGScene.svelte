<script lang="ts">
  import { T } from '@threlte/core'
  import { SVG, Grid, OrbitControls } from '@threlte/extras'
</script>

<T.PerspectiveCamera
  makeDefault
  position.z={25}
>
  <OrbitControls
    autoRotate
    enablePan={false}
    enableZoom={false}  
  />
</T.PerspectiveCamera>

<SVG
  src="/lightbulb.svg"
  scale={0.5}
/>  