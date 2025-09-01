<script>
	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/Depth3D/Hero.svelte';
</script>

<Header></Header>

<div>
	<Hero
		image={{
			image: '/images/me.webp',
			depth: '/images/depth.png'
		}}
	/>
	<div>
		<section class=" p-8 text-default-font">
			<div class="items-center p-8">
				<div class="space-y-4 rounded-lg bg-brand-50/80 p-6">
					<h2 class="text-3xl font-bold text-brand-900">
						Our Story: From Engineering to Imagination
					</h2>
					<p class="text-lg text-brand-600">
						My fascination with product design began in the late 2000s, leading me to pursue a
						degree in mechanical engineering. I was drawn to the promise of building and creating,
						but the reality of university was far more theoretical than I had hoped. The curriculum
						felt restrictive, a cookie-cutter path that left little room for creative expression.
					</p>
					<p class="text-lg text-brand-600">
						I knew I needed to carve my own path—one where I could merge the analytical rigor of
						engineering with my innate creative freedom. This journey led me to the world of 3D
						animation, data visualization, and web development. Zenzak was born from this desire: a
						studio dedicated to transforming complex, technical concepts into clear, beautiful, and
						impactful visual experiences.
					</p>
					<h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
						Our Philosophy: The Intersection of Precision and Creativity
					</h2>
					<p class="mt-6 text-lg leading-8">
						We believe true innovation doesn't happen in a silo. It happens where disciplined,
						engineering-grade precision meets bold, artistic storytelling. Our process is built on
						this dual foundation. We speak your technical language, understand the mechanics behind
						your ideas, and then translate that brilliance into visuals that are not only accurate
						but also impossible to ignore.
					</p>
					<p>
						I’m a designer, engineer, and programmer turned 3D artist. My unique background allows
						me to understand projects from every angle—from the initial mechanical concept to the
						final, polished marketing asset. I thrive on diving deep into technical challenges and
						emerging with visual solutions that are both elegant and effective.
					</p>
					<ul>
						<li>Mechanical Engineer</li>
						<li>3D Artist & Animator</li>
						<li>Web Developer</li>
						<li>Data Visualisation Specialist</li>
						<li>Photographer</li>
					</ul>
				</div>
			</div>
		</section>
	</div>
</div>
