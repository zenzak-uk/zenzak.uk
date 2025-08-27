<script>
	import { T, useTask } from '@threlte/core';
	import { interactivity } from '@threlte/extras';
	import { Spring } from 'svelte/motion';
	import { OrbitControls, useGltf } from '@threlte/extras';

	interactivity();

	const scale = new Spring(1);

	let rotation = $state(0);
	useTask((delta) => {
		rotation += delta * 0.5; // Slow down rotation
	});
</script>

<T.PerspectiveCamera
	makeDefault
	position={[8, 8, 8]}
	oncreate={(ref) => {
		ref.lookAt(0, 0, 0);
	}}
>
	<OrbitControls />
</T.PerspectiveCamera>

{#await useGltf('/assets/scene.glb') then gltf}
	<T
		is={gltf.scene}
		scale={3 * scale.current}
		onpointerenter={() => (scale.target = 1.2)}
		onpointerleave={() => (scale.target = 1)}
		rotation.y={rotation}
		position={[0, -1, 0]}
	/>
{:catch error}
	<T.Mesh>
		<T.BoxGeometry args={[0.5, 0.5, 0.5]} />
		<T.MeshStandardMaterial color="red" />
	</T.Mesh>
{/await}

<!-- Optimized lighting setup -->
<T.DirectionalLight position={[5, 8, 5]} intensity={5.2} castShadow />
<T.PointLight position={[-3, 3, 3]} color="#4fc3f7" intensity={5.8} />