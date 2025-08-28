<script>
  import { T, useTask } from '@threlte/core'
  import { World, RigidBody, Collider } from '@threlte/rapier'
  import { Environment, RoundedBoxGeometry } from '@threlte/extras'
  import { Vector3, DoubleSide } from 'three'
  
  export let mouse = { x: 0, y: 0 }
  export let currentAccent = 0
  
  // Configuration
  const accents = ['#4060ff', '#20ffa0', '#ff4060', '#ffcc00']
  
  // Physics bodies
  let pointerRigidBody
  let connectorBodies = Array(10).fill(null)
  
  // Helper functions
  function shuffle(accentIndex = 0) {
    return [
      { color: '#444', roughness: 0.1 },
      { color: '#444', roughness: 0.75 },
      { color: '#444', roughness: 0.75 },
      { color: 'white', roughness: 0.1 },
      { color: 'white', roughness: 0.75 },
      { color: 'white', roughness: 0.1 },
      { color: accents[accentIndex], roughness: 0.1, accent: true },
      { color: accents[accentIndex], roughness: 0.75, accent: true },
      { color: accents[accentIndex], roughness: 0.1, accent: true }
    ]
  }
  
  const randomPosition = () => [
    (Math.random() - 0.5) * 10,
    (Math.random() - 0.5) * 10,
    (Math.random() - 0.5) * 10
  ]
  
  $: connectors = shuffle(currentAccent)
  
  // Animation for pointer following mouse
  const pointerVec = new Vector3()
  useTask(() => {
    if (!pointerRigidBody) return
    const viewport = { width: 10, height: 10 }
    pointerVec.set(
      (mouse.x * viewport.width) / 2,
      (mouse.y * viewport.height) / 2,
      0
    )
    pointerRigidBody.setNextKinematicTranslation(pointerVec)
  })
  
  // Physics animation for connectors
  const connectorVecs = Array(10).fill(null).map(() => new Vector3())
  useTask((delta) => {
    delta = Math.min(0.1, delta)
    connectorBodies.forEach((body, i) => {
      if (!body) return
      const translation = body.translation()
      const vec = connectorVecs[i]
      vec.set(translation.x, translation.y, translation.z)
      body.applyImpulse(vec.negate().multiplyScalar(0.2))
    })
  })
</script>

<!-- Background -->
<T.Color attach="background" args={['#141622']} />

<!-- Lighting -->
<T.AmbientLight intensity={0.4} />
<T.SpotLight 
  position={[10, 10, 10]} 
  angle={0.15} 
  penumbra={1} 
  intensity={1} 
  castShadow 
/>

<!-- Physics World -->
<World gravity={[0, 0, 0]}>
  <!-- Mouse Pointer Physics Body -->
  <RigidBody 
    bind:rigidBody={pointerRigidBody}
    position={[0, 0, 0]} 
    type="kinematicPosition"
  >
    <Collider shape="ball" args={[1]} />
  </RigidBody>
  
  <!-- Connector Objects with Rounded Cubes -->
  {#each connectors as props, i}
    <RigidBody 
      bind:rigidBody={connectorBodies[i]}
      linearDamping={4} 
      angularDamping={1} 
      friction={0.1} 
      position={randomPosition()}
    >
      <Collider shape="cuboid" args={[0.5, 0.5, 0.5]} />
      
      <!-- Rounded Cube Mesh -->
      <T.Mesh castShadow receiveShadow>
        <RoundedBoxGeometry args={[1, 1, 1]} radius={0.1} smoothness={4} />
        <T.MeshStandardMaterial 
          metalness={0.2} 
          roughness={props.roughness}
          color={props.color}
        />
      </T.Mesh>
      
      {#if props.accent}
        <T.PointLight intensity={4} distance={2.5} color={props.color} />
      {/if}
    </RigidBody>
  {/each}
  
  <!-- Special Transmission Connector (Glass-like) -->
  <RigidBody 
    bind:rigidBody={connectorBodies[9]}
    linearDamping={4} 
    angularDamping={1} 
    friction={0.1} 
    position={[3, 3, 0]}
  >
    <Collider shape="cuboid" args={[0.5, 0.5, 0.5]} />
    
    <!-- Glass-like Rounded Cube -->
    <T.Mesh castShadow receiveShadow>
      <RoundedBoxGeometry args={[1, 1, 1]} radius={0.1} smoothness={4} />
      <T.MeshPhysicalMaterial 
        clearcoat={1} 
        clearcoatRoughness={0}
        transmission={0.95}
        thickness={0.5}
        roughness={0}
        metalness={0}
        color="white"
        ior={1.5}
        opacity={0.9}
        transparent
      />
    </T.Mesh>
  </RigidBody>
</World>

<!-- Environment -->
<Environment resolution={256}>
  <T.Group rotation={[-Math.PI / 3, 0, 1]}>
    <T.Mesh position={[0, 5, -9]} scale={2} rotation={[Math.PI / 2, 0, 0]}>
      <T.CircleGeometry args={[1, 32]} />
      <T.MeshBasicMaterial color="white" side={DoubleSide} />
    </T.Mesh>
    <T.Mesh position={[-5, 1, -1]} scale={2} rotation={[0, Math.PI / 2, 0]}>
      <T.CircleGeometry args={[1, 32]} />
      <T.MeshBasicMaterial color="white" side={DoubleSide} />
    </T.Mesh>
    <T.Mesh position={[-5, -1, -1]} scale={2} rotation={[0, Math.PI / 2, 0]}>
      <T.CircleGeometry args={[1, 32]} />
      <T.MeshBasicMaterial color="white" side={DoubleSide} />
    </T.Mesh>
    <T.Mesh position={[10, 1, 0]} scale={8} rotation={[0, -Math.PI / 2, 0]}>
      <T.CircleGeometry args={[1, 32]} />
      <T.MeshBasicMaterial color="white" side={DoubleSide} />
    </T.Mesh>
  </T.Group>
</Environment>