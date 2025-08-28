<script lang="ts">
  import { T } from '@threlte/core'
  import { Environment, Float, HTML, useGltf, OrbitControls, RoundedBoxGeometry } from '@threlte/extras'
  import { type Mesh, MathUtils } from 'three'
  import { RoundedPlaneGeometry } from './RoundedPlaneGeometry'

  const url = window.origin
</script>

<T.PerspectiveCamera
  position={[50, -30, 30]}
  fov={20}
  oncreate={(ref) => {
    ref.lookAt(0, 0, 0)
  }}
  makeDefault
>
  <OrbitControls
    enableDamping
    enableZoom={false}
  />
</T.PerspectiveCamera>

<T.AmbientLight intensity={0.3} />

<Environment url="/assets/environments/meadow.hdr" />

<Float
  scale={0.7}
  floatIntensity={5}
>
  <HTML
    rotation.y={90 * MathUtils.DEG2RAD}
    position.x={1.2}
    transform
    occlude="blending"
    geometry={new RoundedPlaneGeometry(10.5, 21.3, 0.5)}
  >
    <div
      class="phone-wrapper"
      style="border-radius:1rem"
    >
      <iframe
        title="Phone Content"
        src={url}
        width="100%"
        height="100%"
        frameborder="0"
      ></iframe>
    </div>
  </HTML>

  <T.Mesh
  position={[0.18, 0, 0]}>
    <RoundedBoxGeometry 
      args={[2, 22, 11]}
      radius={0.45}
      smoothness={6}
    />
    <T.MeshStandardMaterial 
      color="#001b3a"
      metalness={0.7}
      roughness={0.1}
    />
  </T.Mesh>
</Float>

<style>
  .phone-wrapper {
    height: 848px;
    width: 420px;
    border-radius: 63px;
    overflow: hidden;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
</style>