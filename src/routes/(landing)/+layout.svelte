<script>
	import { base } from '$app/paths';
	import Header from '$lib/components/Header.svelte';

	let { children, data } = $props();

	const poster = `${base}/videos/poster.avif`;
	const bgWebm = `${base}/videos/bg.webm`;
	const bgMp4 = `${base}/videos/bg.mp4`;
	import Footer from '$lib/components/Footer.svelte';
</script>

<Header />

<!-- Fixed background -->
<div class="pointer-events-none fixed inset-0 -z-10" style={`--poster-url: url(${poster})`}>
	<video autoplay muted loop playsinline {poster} class="!min-h-full w-full object-cover">
		<source src={bgWebm} type="video/webm" />
		<source src={bgMp4} type="video/mp4" />
		Your browser does not support the video tag.
	</video>
	<div class="bg-gradient-radial absolute inset-0 from-black/30 to-black/80" />
</div>

<main class="relative z-0 min-h-dvh w-full {data?.layout ?? ''}">
	{@render children()}
</main>

<Footer></Footer>

<style>
	.bg-gradient-radial {
		background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.8) 70%);
	}

	/* Reduced motion support */
	@media (prefers-reduced-motion: reduce) {
		video {
			display: none;
		}
		.fixed {
			background: var(--poster-url) center/cover no-repeat;
		}
	}
</style>
