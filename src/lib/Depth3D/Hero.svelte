<script lang="ts">
	import Depth3D from '$lib/Depth3D';

	export let image: {
		image: string;
		depth: string;
	}[];
</script>

<div class="relative isolate min-h-screen w-full overflow-hidden">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div
			class="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8"
		>
			<div class="flex flex-col justify-center sm:max-w-xl xl:col-end-1 xl:row-start-1">
				<div class="mt-20 text-lg leading-8 text-stone-400">
					<h1 class="mb-8 max-w-2xl text-4xl font-bold tracking-tight text-stone-50 sm:text-6xl">
						Engineering in Motion.
					</h1>
					I see the world through two lenses: the exacting precision of an engineer and the emotive power
					of a visual artist. I see these forces as the blueprint and the impact of true innovation.
					My passion is to be the bridge between them, translating your technical brilliance into a visual
					story that connects with audiences, convinces stakeholders, and helps you claim the success
					your vision deserves.
				</div>
			</div>

			<div class="flex h-screen w-full items-center justify-center">
				<Depth3D {image} rounded />
			</div>
		</div>
	</div>
</div>
