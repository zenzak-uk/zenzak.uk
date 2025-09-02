<script>
	import * as THREE from 'three';
	import { T, useTask } from '@threlte/core';
	import { RigidBody, Collider, useRigidBody, AutoColliders } from '@threlte/rapier';
	import { readable } from 'svelte/store';

	let matcapTexture = readable(new THREE.TextureLoader().load('/assets/textures/gold-matcap.png'));

	let { scale = 1, controlState = { mode: 'normal', isAnimating: false } } = $props();

	let r = THREE.MathUtils.randFloatSpread;

	// Reference to the rigid body
	let rigidBody = $state();
	let vec = new THREE.Vector3();

	// Calculate effective scale based on control state
	const effectiveScale = $derived(controlState.mode === 'shrunk' ? scale * 0.3 : scale);

	// Track previous control state to detect changes
	let previousMode = 'normal';

	// Apply impulse during each frame update
	useTask((delta) => {
		if (rigidBody) {
			// Limit the delta to prevent large jumps
			delta = Math.min(0.1, delta);

			// Handle push effect when mode changes to 'pushed'
			if (controlState.mode === 'pushed' && previousMode !== 'pushed') {
				// Apply strong outward impulse to push spheres away from center
				const currentPos = rigidBody.translation();
				const pushDirection = new THREE.Vector3(currentPos.x, currentPos.y, currentPos.z)
					.normalize()
					.multiplyScalar(300 * scale); // Strong push force

				rigidBody.applyImpulse(pushDirection);
			}

			// Normal physics behavior
			rigidBody.applyImpulse(
				vec
					.copy(rigidBody.translation())
					.normalize()
					.multiply({
						x: -50 * delta * effectiveScale,
						y: -150 * delta * effectiveScale,
						z: -50 * delta * effectiveScale
					})
			);
		}

		previousMode = controlState.mode;
	});
</script>

<T.Group position={[r(20), r(20) - 25, r(20) - 10]}>
	<RigidBody
		linearDamping={0.75}
		angularDamping={0.15}
		friction={0.2}
		bind:rigidBody
		colliders={false}
	>
		<Collider shape="ball" args={[effectiveScale]}>
			<T.Mesh scale={[effectiveScale, effectiveScale, effectiveScale]} castShadow receiveShadow>
				<T.SphereGeometry args={[1, 64, 64]} />
				<T.MeshMatcapMaterial bind:matcap={$matcapTexture} />
				<!--<T.MeshPhysicalMaterial 
                  color="#E2DFD2"
                  roughness={1}
                  metalness={0.3}
                  clearcoat={1.0} 
                  clearcoatRoughness={0.1}
              />-->
			</T.Mesh>
		</Collider>
	</RigidBody>
</T.Group>
