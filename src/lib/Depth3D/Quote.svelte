<script lang="ts">
	import Depth3D from '$lib/Depth3D';

	export let image: {
		image: string;
		depth: string;
	};
</script>

<section class="isolate overflow-hidden px-6 lg:px-8">
	<div class="relative mx-auto max-w-2xl py-4 sm:py-12 lg:max-w-4xl">
		<figure class="grid grid-cols-1 items-center gap-x-6 gap-y-2 lg:gap-x-10">
			<div class="relative col-span-2 lg:col-start-1 lg:row-start-2">
				<div class="mt-2 text-lg leading-8 text-stone-400">
					
					
				</div>
			</div>

			<div class="relative col-end-1 h-56 w-56 lg:row-span-4 lg:h-[32rem] lg:w-[32rem]">
				<div class="absolute inset-0">
					<Depth3D {image} rounded />
				</div>
			</div>
			<figcaption class="text-base lg:col-start-1 lg:row-start-3">
				<div class="font-semibold text-stone-100">Zak</div>
				<div class="mt-1 text-stone-400">3D Artist</div>
			</figcaption>
		</figure>
	</div>
</section>
