<script lang="ts">
	import { T } from '@threlte/core';
	import { OrbitControls } from '@threlte/extras';
	import ParticleAttractor from './ParticleAttractor.svelte';
</script>

<!-- Camera -->
<T.PerspectiveCamera makeDefault position={[0, 0, 15]} fov={50}>
	<OrbitControls
		enableDamping
		enablePan={false}
		enableZoom={true}
		minDistance={5}
		maxDistance={30}
	/>
</T.PerspectiveCamera>

<!-- Lighting -->
<T.AmbientLight intensity={0.5} />
<T.DirectionalLight position={[10, 10, 5]} intensity={1} castShadow />
<T.DirectionalLight position={[-10, -10, -5]} intensity={0.3} />

<!-- Particle System -->
<ParticleAttractor />
