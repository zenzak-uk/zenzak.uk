<script>
	import { World, Debug } from '@threlte/rapier';
	import Scene from '$lib/components/background/Scene.svelte';
	import Underlay from '$lib/components/background/Underlay.svelte';
	import Overlay from '$lib/components/background/Overlay.svelte';
	import CustomRenderer from '$lib/components/background/CustomRenderer.svelte';
	import CanvasPortal from '$lib/components/CanvasPortal.svelte';
	import SEO from '$lib/components/SEO/index.svelte';
	const seoProps = {
		title: 'Digital Experiences for the Web | Zenzak Studio',
		metadescription:
			'Zenzak Studio builds immersive 3D web experiences. Elevate your site with interactive product configurators, digital twins, and data visualizations that engage and persuade.'
	};
</script>

<SEO {...seoProps} />

<div class="relative h-screen w-screen overflow-hidden">
	<!-- Underlay (behind the canvas) -->
	<div class="absolute inset-0 z-0 bg-[url('/images/background.webp')] bg-cover bg-center">
		<div class="absolute inset-0 bg-black/20"></div>
		<div class="relative">
			<Underlay />
		</div>
	</div>

	<!-- 3D Content rendered into the shared Canvas via portal -->
	<CanvasPortal>
		<World gravity={[0, 0, 0]}>
			<!-- <Debug /> -->
			<Scene />
		</World>
		<CustomRenderer></CustomRenderer>
	</CanvasPortal>

	<!-- Overlay (above the canvas) -->
	<div class="pointer-events-none absolute inset-0 z-20">
		<Overlay />
	</div>
</div>
