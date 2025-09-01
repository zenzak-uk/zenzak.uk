<script>
	import { Canvas } from '@threlte/core';
	import { World, Debug } from '@threlte/rapier';
	import Scene from '$lib/components/background/Scene.svelte';
	import Underlay from '$lib/components/background/Underlay.svelte';
	import Overlay from '$lib/components/background/Overlay.svelte';
	import CustomRenderer from '$lib/components/background/CustomRenderer.svelte';
</script>

<div class="relative w-screen h-screen overflow-hidden">
	<!-- Underlay (behind the canvas) -->
	<div class="absolute inset-0 z-0 bg-[url('/images/background.webp')] bg-cover bg-center">
		<div class="absolute inset-0 bg-black/20"></div>
		<div class="relative">
			<Underlay />
		</div>
	</div>

	<!-- Canvas (middle layer) -->
	<div class="absolute inset-0 z-10">
		<Canvas shadows>
			<World gravity={[0, 0, 0]}>
				<!-- <Debug /> -->
				<Scene />
			</World>
			<CustomRenderer></CustomRenderer>
		</Canvas>
	</div>

	<!-- Overlay (above the canvas) -->
	<div class="absolute inset-0 z-20 pointer-events-none">
		<Overlay />
	</div>
</div>