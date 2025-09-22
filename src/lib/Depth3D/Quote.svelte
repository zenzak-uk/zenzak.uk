<script lang="ts">
	import Depth3D from '$lib/Depth3D';

	export let image: {
		image: string;
		depth: string;
	};
</script>

<section class="isolate overflow-hidden px-6 lg:px-8">
	<div class="relative mx-auto max-w-2xl lg:max-w-4xl">
		<figure class="flex flex-col items-center">
			<div class="relative h-56 w-56 lg:h-[32rem] lg:w-[32rem]">
				<div class="absolute inset-0">
					<Depth3D {image} rounded />
				</div>
			</div>
			<figcaption class="mt-4 text-center text-base">
				<div class="font-semibold text-stone-100">Zak</div>
				<div class="mt-1 text-stone-400">3D Artist</div>
			</figcaption>
		</figure>
	</div>
</section>
