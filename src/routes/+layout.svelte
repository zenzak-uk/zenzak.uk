<script>
	import '../app.css';
	import { base } from '$app/paths';
	import Header from '$lib/components/Header.svelte'; // 1. Import the new Header
	let { children } = $props();
</script>

<svelte:head>
	<title>Zenzak Animation | Engineering-Grade 3D Animation</title>
	<meta
		name="description"
		content="We translate complex engineering ideas into clear, persuasive, and high-impact 3D animations and product visualizations that help you secure funding, win bids, and drive sales."
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Zenzak Animation | Engineering-Grade 3D Animation" />
	<meta
		property="og:description"
		content="High-impact 3D animations and product visualizations that make complex technical ideas clear and persuasive."
	/>
	<meta property="og:image" content="https://www.zenzak.uk/social-preview.png" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:title" content="Zenzak Animation | Engineering-Grade 3D Animation" />
	<meta
		property="twitter:description"
		content="High-impact 3D animations and product visualizations that make complex technical ideas clear and persuasive."
	/>
	<meta property="twitter:image" content="https://www.zenzak.uk/social-preview.png" />
</svelte:head>

<div class="app-container" style="--poster-url: url({base}/videos/poster.avif)">
	<div class="background-video-container">
		<video autoplay muted loop playsinline poster="{base}/videos/poster.avif">
			<source src="{base}/videos/bg.mp4" type="video/mp4" />
			Your browser does not support the video tag.
		</video>
		<div class="video-overlay"></div>
	</div>

	<!-- 2. Add the Header component here -->
	<Header></Header>

	<div class="content-container">
		{@render children()}
	</div>
</div>

<style>
	.app-container {
		position: relative;
		min-height: 100dvh;
		display: flex;
		flex-direction: column;
		align-items: center;
		overflow: hidden;
	}

	.background-video-container {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
	}

	video {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.video-overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.8) 70%);
	}

	.content-container {
		position: relative;
		z-index: 1;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		flex-grow: 1;

		/* Make the content area take up the remaining height */
		min-height: calc(100dvh - 20px);
		margin-top: 20px; /* Push the container down from the top */
	}

	@media (prefers-reduced-motion: reduce) {
		video {
			display: none;
		}
		.background-video-container {
			background: var(--poster-url);
		}
	}
</style>
