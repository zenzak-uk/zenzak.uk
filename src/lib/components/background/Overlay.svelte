<script>
	import { pushSpheres, sphereControlState } from '$lib/components/background/sphereControls.js';
</script>

<div class="pointer-events-none fixed inset-0 flex h-screen w-screen flex-col p-4 sm:p-6 md:p-8">

	<!-- Header Spacer -->
	<div class="font-antonio mt-16 text-2xl font-bold tracking-tighter sm:mt-20 sm:text-3xl">
		&nbsp;
	</div>

	<div class="flex-grow"></div>

	<!-- Main Title Spacer -->
	<div class="w-full">
		<div class="font-antonio text-[clamp(3.5rem,16vw,12rem)] leading-none font-bold">&nbsp;</div>
	</div>

	<!-- Call to Action Section -->
	<div class="pointer-events-auto mt-3 w-full max-w-md sm:mt-4 sm:max-w-lg">
		<!-- Description Spacer -->
		<div class="text-sm leading-relaxed text-transparent sm:text-base md:text-lg">&nbsp;</div>

		<div class="mt-32 flex items-center space-x-6 sm:mt-40">
			<a
				href="/contact"
				class="flex min-h-[44px] items-center justify-center border border-white px-5 py-3 text-base
				       text-white transition-colors duration-300 hover:bg-white
				       hover:text-black sm:px-6 sm:py-3 sm:text-lg"
			>
				Start a Project
			</a>
		</div>
	</div>

	<!-- Circular Push Button -->
	<button
		onclick={pushSpheres}
		disabled={$sphereControlState.isAnimating}
		class="pointer-events-auto fixed left-1/2 bottom-[33vh] z-30 flex h-24 w-24 -translate-x-1/2 
			   items-center justify-center rounded-full border border-white/60 bg-black/20 
			   text-white backdrop-blur-sm transition-all duration-300 hover:border-white/50 
			   hover:bg-black/70 disabled:opacity-20"
		aria-label="Push spheres away"
	>
		Push
	</button>

	<div class="flex-grow"></div>

	<!-- Footer Section -->
	<footer class="pointer-events-auto flex w-full items-end justify-between">
		<div class="text-xs whitespace-nowrap sm:text-sm">&nbsp;</div>

		<a
			href="https://github.com/zenzak-uk"
			target="_blank"
			rel="noopener noreferrer"
			class="flex min-h-[44px] items-center justify-center px-2 py-2
			       text-xs text-neutral-400 transition-colors hover:text-white hover:underline sm:text-sm"
		>
			Github
		</a>
	</footer>
</div>