<script>
	let logos = $state([
		{ name: 'Blender', src: '/logos/blender_logo_white.png' },
		{ name: 'Svelte', src: '/logos/svelte-horizontal.png' },
		{ name: 'Netlify', src: '/logos/netlify.svg' },
		{ name: 'P5js', src: '/logos/P5js.svg' },
		{ name: 'threejs', src: '/logos/threejs.svg' },
		{ name: 'Unreal', src: '/logos/unreal.svg' }
	]);
</script>

<div class="w-full py-12">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<h2 class="mb-8 text-center text-lg font-bold tracking-wide text-gray-200 uppercase">
			Powered by industry-leading tools
		</h2>

		<div class="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
			{#each logos as logo}
				<div
					class="flex h-16 cursor-pointer items-center justify-center rounded-xl bg-gradient-to-br from-gray-800 to-black p-4 shadow-lg transition-all duration-300 hover:from-gray-700 hover:to-gray-800 hover:shadow-xl"
				>
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
