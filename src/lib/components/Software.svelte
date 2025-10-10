<script>
	let logos = $state([
		{ name: 'Blender', src: '/logos/blender_logo_white.png' },
		{ name: 'Svelte', src: '/logos/svelte-horizontal.png' },
		{ name: 'Netlify', src: '/logos/netlify.svg' },
		{ name: 'P5js', src: '/logos/P5js.svg' },
		{ name: 'threejs', src: '/logos/threejs.svg' },
		{ name: 'Unreal', src: '/logos/unreal.svg' },
	]);
</script>

<div class="w-full py-12">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<h2 class="text-center text-lg font-bold text-gray-200 uppercase tracking-wide mb-8">
			Powered by industry-leading tools
		</h2>
		
		<div class="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
	{#each logos as logo}
		<div class="flex items-center justify-center h-16 p-4 bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 rounded-xl transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl">
			<img 
				src={logo.src} 
				alt={logo.name}
				class="max-h-12 w-auto object-contain brightness-0 invert"
			/>
		</div>
	{/each}
</div>
	</div>
</div>