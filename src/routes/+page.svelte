<script>
	import { onMount } from 'svelte';
	import Button from '$lib/components/Button.svelte';
	import { base } from '$app/paths';
	import Header from '$lib/components/Header.svelte';

	import SEO from '$lib/components/SEO/index.svelte';
	const seoProps = {
		title: 'Engineering-Grade 3D Animation & Product Visualization',
		metadescription:
			'Zenzak Animation provides engineering-grade 3D animation, product visualization, and design services to bring your vision to market. Secure funding, win bids, and drive sales with stunning visuals.'
	};
</script>

<SEO {...seoProps} />

<div
	class="relative flex min-h-dvh flex-col items-stretch overflow-hidden"
	style="--poster-url: url({base}/videos/poster.avif)"
>
	<div class="fixed top-0 left-0 z-[-1] h-full w-full">
		<video
			autoplay
			muted
			loop
			playsinline
			poster="{base}/videos/poster.avif"
			class="h-full w-full object-cover"
		>
			<source src="{base}/videos/bg.webm" type="video/webm" />
			<source src="{base}/videos/bg.mp4" type="video/mp4" />
			Your browser does not support the video tag.
		</video>
		<div
			class="absolute top-0 left-0 h-full w-full bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.3)_0%,rgba(0,0,0,0.8)_70%)]"
		></div>
	</div>

	<Header></Header>
	<div class="flex min-h-0 flex-grow flex-col">
        <div class="m-4 mt-20 flex flex-grow flex-col items-center sm:m-10 sm:mt-32">
			<main
                class="flex w-full max-w-6xl flex-grow flex-col items-center justify-center text-center"
			>
				<div
					class="hero-element relative mx-0 my-1 w-full max-w-[550px] px-0 py-4 before:absolute before:top-0 before:left-1/2 before:h-px before:w-full before:-translate-x-1/2 before:bg-white/20 after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-full after:-translate-x-1/2 after:bg-white/20 md:my-2 md:py-6"
				>
					<h1
						class="m-0 px-4 text-4xl font-extralight tracking-[0.4em] text-gray-100 md:text-5xl xl:text-6xl"
					>
						ZENZAK ANIMATION
					</h1>
				</div>

				<div
					class="hero-element mx-0 my-6 w-full max-w-[500px] rounded-[18px] border border-white/10 bg-white/0 px-4 py-2 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[5px] md:my-8 md:px-8 md:py-4 xl:my-12"
				>
					<h2
						class="m-0 text-base leading-[1.8] font-semibold tracking-[0.05em] text-gray-300 md:text-lg xl:text-xl"
					>
						MAKING COMPLEX IDEAS CLEAR, PERSUASIVE, AND READY FOR MARKET.
					</h2>
				</div>

				<nav class="mb-8 flex w-full max-w-3xl flex-wrap justify-center gap-2 md:mb-12 xl:mb-16">
					<Button href="/services">SERVICES</Button>
					<Button href="/solutions">3D SOLUTIONS</Button>
					<Button href="/faq">FAQS</Button>
					<Button href="/blog">BLOG</Button>
					<Button href="/contact">CONTACT</Button>
				</nav>
			</main>
		</div>
        
		<footer class="mt-auto pb-4">
			<p class="text-center text-sm tracking-wide text-gray-400">
				BACKGROUND ANIMATION BY ZENZAK ANIMATION.
			</p>
		</footer>
	</div>
</div>

<style>
	@media (prefers-reduced-motion: reduce) {
		video {
			display: none;
		}
	}
</style>
