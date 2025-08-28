<script lang="ts">
  import type { RigidBody as RapierRigidBody } from '@dimforge/rapier3d-compat'
  import { T, useTask, useThrelte } from '@threlte/core'
  import { RigidBody, Collider } from '@threlte/rapier'
  import { 
    SphereGeometry, 
    MeshStandardMaterial, 
    Vector3, 
    Color,
    BufferGeometry,
    LineBasicMaterial,
    Line
  } from 'three'
  import { onMount } from 'svelte'

  // Configuration
  const PARTICLE_COUNT = 25
  const ATTRACTION_FORCE = 0.8
  const MOUSE_REPEL_FORCE = 12
  const MOUSE_REPEL_RADIUS = 8
  const DAMPING = 0.92
  const PARTICLE_RADIUS = 0.2

  // Create shared geometry and materials
  const sphereGeometry = new SphereGeometry(PARTICLE_RADIUS, 32, 16)
  const materials = Array.from({ length: 5 }, (_, i) => 
    new MeshStandardMaterial({ 
      color: new Color().setHSL(0.6 + i * 0.05, 0.8, 0.6),
      metalness: 0.4,
      roughness: 0.3,
      emissive: new Color().setHSL(0.6 + i * 0.05, 0.8, 0.3),
      emissiveIntensity: 0.2
    })
  )

  // Mouse tracking
  let mouseX = $state(0)
  let mouseY = $state(0)
  let mouseWorldPos = $state(new Vector3())
  
  const { camera } = useThrelte()

  // Particle data
  interface Particle {
    rigidBody?: RapierRigidBody
    position: Vector3
    velocity: Vector3
    materialIndex: number
    id: string
  }

  let particles: Particle[] = $state(
    Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
      position: new Vector3(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 4
      ),
      velocity: new Vector3(),
      materialIndex: i % materials.length,
      id: `particle-${i}`
    }))
  )

  // Mouse event handling
  onMount(() => {
    if (typeof window === 'undefined') return

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1
      
      const cameraInstance = $camera
      if (cameraInstance) {
        // Calculate mouse position in 3D space at z=0
        const vector = new Vector3(mouseX, mouseY, 0.5)
        vector.unproject(cameraInstance)
        const dir = vector.sub(cameraInstance.position).normalize()
        const distance = -cameraInstance.position.z / dir.z
        mouseWorldPos = cameraInstance.position.clone().add(dir.multiplyScalar(distance))
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  })

  // Physics update loop
  useTask((delta) => {
    particles.forEach((particle) => {
      if (!particle.rigidBody) return

      const pos = particle.rigidBody.translation()
      const currentPos = new Vector3(pos.x, pos.y, pos.z)
      
      // Calculate attraction to center
      const toCenter = new Vector3(-pos.x, -pos.y, -pos.z * 0.5)
      toCenter.normalize().multiplyScalar(ATTRACTION_FORCE)
      
      // Calculate repulsion from mouse
      const toMouse = currentPos.clone().sub(mouseWorldPos)
      const mouseDistance = toMouse.length()
      
      let repelForce = new Vector3()
      if (mouseDistance < MOUSE_REPEL_RADIUS && mouseDistance > 0) {
        const repelStrength = Math.pow(1 - mouseDistance / MOUSE_REPEL_RADIUS, 2) * MOUSE_REPEL_FORCE
        repelForce = toMouse.normalize().multiplyScalar(repelStrength)
      }
      
      // Apply forces
      particle.velocity.add(toCenter.multiplyScalar(delta))
      particle.velocity.add(repelForce.multiplyScalar(delta))
      particle.velocity.multiplyScalar(DAMPING)
      
      // Update position
      const newPos = currentPos.add(particle.velocity.clone().multiplyScalar(delta))
      particle.rigidBody.setNextKinematicTranslation({
        x: newPos.x,
        y: newPos.y,
        z: newPos.z
      })
    })
  })

  // Connection lines calculation
  interface Connection {
    start: Vector3
    end: Vector3
    opacity: number
  }

  let connections: Connection[] = $state([])
  
  useTask(() => {
    const newConnections: Connection[] = []
    const maxDistance = 3
    
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        if (!particles[i].rigidBody || !particles[j].rigidBody) continue
        
        const pos1 = particles[i].rigidBody.translation()
        const pos2 = particles[j].rigidBody.translation()
        
        const distance = Math.sqrt(
          Math.pow(pos1.x - pos2.x, 2) +
          Math.pow(pos1.y - pos2.y, 2) +
          Math.pow(pos1.z - pos2.z, 2)
        )
        
        if (distance < maxDistance) {
          const opacity = Math.pow(1 - (distance / maxDistance), 2)
          newConnections.push({
            start: new Vector3(pos1.x, pos1.y, pos1.z),
            end: new Vector3(pos2.x, pos2.y, pos2.z),
            opacity
          })
        }
      }
    }
    
    connections = newConnections
  })
</script>

<!-- Particles -->
{#each particles as particle (particle.id)}
  <T.Group position={[particle.position.x, particle.position.y, particle.position.z]}>
    <RigidBody
      bind:rigidBody={particle.rigidBody}
      type="kinematicPosition"
      lockRotations
    >
      <Collider
        shape="ball"
        args={[PARTICLE_RADIUS]}
        sensor
      />
      <T.Mesh
        castShadow
        receiveShadow
        geometry={sphereGeometry}
        material={materials[particle.materialIndex]}
      >
        <!-- Add a glow effect -->
        <T.PointLight
          intensity={0.5}
          distance={2}
          color={materials[particle.materialIndex].color}
        />
      </T.Mesh>
    </RigidBody>
  </T.Group>
{/each}

<!-- Connection Lines -->
<T.Group>
  {#each connections as connection}
    <T.Line
      points={[
        [connection.start.x, connection.start.y, connection.start.z],
        [connection.end.x, connection.end.y, connection.end.z]
      ]}
    >
      <T.LineBasicMaterial
        color={0xffffff}
        transparent
        opacity={connection.opacity * 0.4}
        linewidth={1}
      />
    </T.Line>
  {/each}
</T.Group>

<!-- Mouse Cursor Indicator -->
<T.Group position={[mouseWorldPos.x, mouseWorldPos.y, mouseWorldPos.z]}>
  <T.Mesh rotation.x={-Math.PI / 2}>
    <T.RingGeometry args={[MOUSE_REPEL_RADIUS * 0.9, MOUSE_REPEL_RADIUS, 64]} />
    <T.MeshBasicMaterial
      color={0xffffff}
      transparent
      opacity={0.05}
      side={2}
    />
  </T.Mesh>
</T.Group>