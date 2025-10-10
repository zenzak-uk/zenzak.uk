<script lang="ts">
	import { fly } from 'svelte/transition';
	import {
		Camera,
		Layers,
		Sparkles,
		Box,
		View,
		MousePointerClick,
		Ruler,
		Grid3X3,
		Wrench,
		Palette,
		Play,
		Sun,
		type Icon
	} from 'lucide-svelte';

	interface Service {
		title: string;
		description: string;
		features: string[];
		cta: {
			text: string;
			href: string;
		};
		icon: typeof Icon;
	}

	interface FlagshipService extends Service {
		tagline: string;
		image?: string;
	}

	let {
		flagship = $bindable({
			tagline: 'Our Flagship Service',
			title: 'Product Visualization',
			description:
				'Photorealistic renders combining engineering precision with photographic artistry. 8K hero shots and photo-real composites that demand attention and drive interest.',
			features: [
				'8K photorealistic rendering',
				'Studio & lifestyle lighting',
				'Launch-ready assets'
			],
			cta: {
				text: 'View Portfolio',
				href: '/portfolio'
			},
			image: '/images/moonwake.webp',
			icon: Camera
		}),
		supportingServices = $bindable([
			{
				title: 'AR & Web 3D',
				description:
					'Interactive 3D experiences optimized for web and augmented reality. Embedded viewers and AR-ready models for immersive demonstrations.',
				features: ['AR-ready models', 'Embedded 3D viewers', 'Product configurators'],
				cta: {
					text: 'Learn More',
					href: '/services/ar-web3d'
				},
				icon: Box
			},
			{
				title: 'Product Development',
				description:
					'Engineering-driven 3D modeling supporting your entire product lifecycle. From sketch to production-ready models with CAD accuracy.',
				features: ['CAD-accurate modeling', 'Clean topology & retopology', 'Manufacturing support'],
				cta: {
					text: 'Learn More',
					href: '/services/product-development'
				},
				icon: Ruler
			},
			{
				title: 'Design Services',
				description:
					'Comprehensive design solutions merging technical knowledge with creative vision. From concept sculpting to explainer animations.',
				features: ['Concept visualization', 'Explainer animations', 'CMF & lighting studies'],
				cta: {
					text: 'Learn More',
					href: '/services/design'
				},
				icon: Palette
			}
		])
	}: {
		flagship?: FlagshipService;
		supportingServices?: Service[];
	} = $props();

	const FlagshipIcon = flagship.icon;
</script>

<section class="mx-auto max-w-6xl px-4 py-16 sm:py-20 lg:py-24" id="services">
	<!-- Flagship Service -->
	<div class="mb-20 lg:mb-32">
		<!-- Flagship Content -->
		<div
			class="group relative overflow-hidden rounded-lg border border-zinc-800/50 bg-zinc-900/50 backdrop-blur-sm lg:rounded-2xl"
		>
			<!-- Glow effect on hover -->
			<div
				class="absolute inset-0 bg-gradient-to-br from-slate-500/10 via-transparent to-slate-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
			></div>

			<div class="relative grid gap-8 p-8 sm:p-10 lg:grid-cols-2 lg:gap-16 lg:p-16">
				<!-- Text Content -->
				<div class="order-2 flex flex-col justify-center lg:order-1">
					<!-- Icon -->

					<h2
						class="font-display mb-6 text-4xl leading-tight font-extrabold text-white uppercase sm:text-5xl lg:text-6xl"
					>
						{flagship.title}
					</h2>

					<p class="mb-8 text-base leading-relaxed font-semibold text-slate-100 sm:text-lg">
						{flagship.description}
					</p>

					<!-- Features List -->
					<ul class="mb-10 space-y-3">
						{#each flagship.features as feature}
							<li class="flex items-start font-mono font-semibold text-slate-100">
								<span
									class="mt-0.5 mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md bg-slate-500/20 text-slate-400"
								>
									<Layers class="h-4 w-4" />
								</span>
								<span>{feature}</span>
							</li>
						{/each}
					</ul>
				</div>

				<!-- Visual -->
				<div class="order-1 lg:order-2">
					{#if flagship.image}
						<div
							class="aspect-[4/3] overflow-hidden rounded-lg bg-zinc-800/50 shadow-2xl shadow-black/50 lg:rounded-xl"
						>
							<img
								src={flagship.image}
								alt={flagship.title}
								class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
							/>
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>

	<!-- Transition Divider -->
	<div class="flex items-center gap-6 lg:gap-8">
		<div class="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-700 to-transparent"></div>
		<p class="px-4 text-center font-mono text-sm text-slate-300 italic sm:text-base lg:text-lg">
			Beyond visualization, we support your entire product lifecycle
		</p>
		<div class="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-700 to-transparent"></div>
	</div>

	<!-- Supporting Services -->
	<div>
		<!-- Services Grid -->
		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
			{#each supportingServices as service, i}
				{@const ServiceIcon = service.icon}
				<div
					class="group relative flex flex-col overflow-hidden rounded-lg border border-zinc-800/50 bg-zinc-900/30 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-500/50 hover:bg-zinc-900/50 hover:shadow-2xl hover:shadow-slate-500/10 lg:rounded-xl lg:p-10"
					in:fly={{ y: 20, delay: i * 100, duration: 400 }}
				>
					<!-- Subtle glow on hover -->
					<div
						class="absolute inset-0 bg-gradient-to-br from-slate-500/5 to-slate-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
					></div>

					<div class="relative">
						<!-- Icon -->
						<div
							class="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-slate-500/20 to-slate-500/20 transition-transform duration-300 group-hover:scale-110"
						>
							<ServiceIcon class="h-6 w-6 text-slate-400" />
						</div>

						<!-- Title -->
						<h4 class="font-display mb-4 text-xl font-bold text-white uppercase lg:text-2xl">
							{service.title}
						</h4>

						<!-- Description -->
						<p class="mb-6 flex-grow font-mono text-sm leading-relaxed text-slate-200">
							{service.description}
						</p>

						<!-- Features -->
						<ul class="space-y-2">
							{#each service.features as feature}
								<li class="flex items-start font-mono text-xs text-slate-300">
									<span class="mt-0.5 mr-2 flex-shrink-0 text-slate-400">→</span>
									<span>{feature}</span>
								</li>
							{/each}
						</ul>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
