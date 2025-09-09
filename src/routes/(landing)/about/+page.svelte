<script>
	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/Depth3D/Quote.svelte';
	import SEO from '$lib/components/SEO/index.svelte';
	const seoProps = {
		title: 'Digital Experiences for the Web | Zenzak Animation',
		metadescription:
			'Zenzak Animation builds immersive 3D web experiences. Elevate your site with interactive product configurators, digital twins, and data visualizations that engage and persuade.'
	};
</script>

<SEO {...seoProps} />

<Header></Header>

<div>
	<div class=" mt-24 mx-auto max-w-7xl px-6 pb-24">
		<div
			class="relative overflow-hidden rounded-3xl border border-white/10 bg-black/5 p-8 backdrop-blur-md sm:p-12 lg:p-16"
		>
			<!-- Hero Section -->
			<header class="mx-auto max-w-2xl text-center">
				<h1 class="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
					From Engineering to
					<span class="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
						Imagination
					</span>
				</h1>
			</header>

			<!-- Our Story Section -->
			<section class="mx-auto mt-24 max-w-6xl">
				<div class="grid gap-12 lg:grid-cols-5 lg:gap-16">
					<!-- Side label -->
					<div class="lg:col-span-1">
						<h2 class="text-sm font-semibold tracking-wider text-blue-400 uppercase">Our Story</h2>
						<div class="mt-4 h-px w-12 bg-blue-400"></div>
					</div>

					<!-- Main content -->
					<div class="space-y-6 lg:col-span-4">
						<p class="text-xl leading-relaxed text-gray-200">
							My fascination with product design began in the late 2000s, leading me to pursue a
							degree in mechanical engineering. I was drawn to the promise of
							<span class="font-semibold text-white">building and creating</span>, but the reality
							of university was far more theoretical than I had hoped.
						</p>

						<!-- Pull quote -->
						<blockquote class="my-8 border-l-4 border-violet-400/50 pl-6">
							<p class="text-lg leading-relaxed text-white italic">
								The curriculum felt restrictive, a cookie-cutter path that left little room for
								creative expression.
							</p>
						</blockquote>

						<p class="text-base leading-relaxed text-gray-50">
							I knew I needed to carve my own path, where I could merge the analytical rigor of
							engineering with my innate creative freedom. This journey led me to the world of <span
								class="text-white">3D animation</span
							>,
							<span class="text-white">data visualization</span>, and
							<span class="text-white">web development</span>.
						</p>

						<!-- Highlight box -->
						<div
							class="mt-8 rounded-lg bg-gradient-to-r from-blue-500/10 to-violet-500/10 p-6 backdrop-blur"
						>
							<p class="text-lg leading-relaxed text-white">
								<span class="font-semibold text-blue-400">Zenzak</span> was born from this desire: a
								studio dedicated to transforming complex, technical concepts into clear, beautiful, and
								impactful visual experiences.
							</p>
						</div>
					</div>
				</div>
			</section>

			<!-- Philosophy Section -->
			<section class="mx-auto mt-32 max-w-6xl">
				<div class="grid gap-12 lg:grid-cols-5 lg:gap-16">
					<!-- Side label -->
					<div class="lg:col-span-1">
						<h2 class="text-sm font-semibold tracking-wider text-violet-400 uppercase">
							Our Philosophy
						</h2>
						<div class="mt-4 h-px w-12 bg-violet-400"></div>
					</div>

					<!-- Main content -->
					<div class="space-y-6 lg:col-span-4">
						<!-- Large statement -->
						<h3 class="text-3xl leading-tight font-bold text-white sm:text-4xl">
							The Intersection of
							<span class="text-blue-400">Precision</span> and
							<span class="text-violet-400">Creativity</span>
						</h3>

						<p class="text-lg leading-relaxed text-gray-300">
							We believe true innovation doesn't happen in a silo. It happens where disciplined,
							engineering-grade precision meets bold, artistic storytelling.
						</p>

						<!-- Key points grid -->
						<div class="my-12 grid gap-8 sm:grid-cols-2">
							<div class="space-y-3">
								<div class="flex items-center gap-2">
									<div class="h-2 w-2 rounded-full bg-blue-400"></div>
									<h4 class="font-semibold text-white">Technical Fluency</h4>
								</div>
								<p class="leading-relaxed text-gray-300">
									We speak your technical language and understand the mechanics behind your ideas
								</p>
							</div>

							<div class="space-y-3">
								<div class="flex items-center gap-2">
									<div class="h-2 w-2 rounded-full bg-violet-400"></div>
									<h4 class="font-semibold text-white">Visual Impact</h4>
								</div>
								<p class="leading-relaxed text-gray-300">
									We translate brilliance into visuals that are accurate and impossible to ignore
								</p>
							</div>
						</div>

						<p class="text-base leading-relaxed text-gray-300">
							Our process is built on this dual foundation. We understand projects from every angle;
							from the initial mechanical concept to the final, polished marketing asset.
						</p>
					</div>
				</div>
			</section>

			<!-- About Me Card -->
			<section class="mx-auto mt-24 max-w-4xl">
				<div
					class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/10 via-violet-500/10 to-blue-500/10 p-8 backdrop-blur sm:p-12"
				>
					<!-- Decorative element -->
					<div
						class="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-gradient-to-br from-blue-400/20 to-violet-400/20 blur-2xl"
					></div>

					<div class="relative">
						<p class="text-sm font-semibold tracking-wider text-blue-400 uppercase">About Me</p>

						<p class="mt-4 text-2xl leading-tight font-bold text-white sm:text-3xl">
							Designer. Engineer. Programmer.
							<span
								class="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent"
							>
								{' '}3D Artist.
							</span>
						</p>

						<p class="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
							My unique background helps me understand projects from every angle. I thrive on
							solving technical challenges and emerging with visual solutions that are both <span
								class="text-white">elegant</span
							>
							and
							<span class="text-white">effective</span>.
						</p>
						<Hero
				image={{
					image: '/images/portrait-me.webp',
					depth: '/images/depth-me.webp'
				}}
			/>
					</div>
				</div>
			</section>
		</div>
	</div>
</div>
