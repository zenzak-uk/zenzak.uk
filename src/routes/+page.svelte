<script>
	import { onMount } from 'svelte';
	import Button from '$lib/components/Button.svelte';
	import { base } from '$app/paths';
	import Header from '$lib/components/Header.svelte';

	let contentVisible = $state(false);

	onMount(() => {
		const timer = setTimeout(() => {
			contentVisible = true;
		}, 100);
		return () => clearTimeout(timer);
	});
</script>

<div class="app-container" style="--poster-url: url({base}/videos/poster.avif)">
	<div class="background-video-container">
		<video autoplay muted loop playsinline poster="{base}/videos/poster.avif">
			<source src="{base}/videos/bg.webm" type="video/webm" />
			<source src="{base}/videos/bg.mp4" type="video/mp4" />
			Your browser does not support the video tag.
		</video>
		<div class="video-overlay"></div>
	</div>

	<Header></Header>
	<div class="page-container">
		<main class="home-content" class:visible={contentVisible}>
			<div class="title-container hero-element">
				<h1 class="title">ZENZAK ANIMATION</h1>
			</div>

			<div class="subtitle-panel-wrapper hero-element">
				<p class="subtitle">MAKING COMPLEX IDEAS CLEAR, PERSUASIVE, AND READY FOR MARKET.</p>
			</div>

			<div class="hero-element quote-button-wrapper">
				<Button variant="fill" size="large" href="/contact">Get a Project Quote</Button>
			</div>

			<nav class="main-nav">
				<Button href="/services">SERVICES</Button>
				<Button href="/solutions">3D SOLUTIONS</Button>
				<Button href="/faq">FAQS</Button>
				<Button href="/blog">BLOG</Button>
				<Button href="/contact">CONTACT</Button>
			</nav>
		</main>

		<footer>
			<h5 class="text-gray-400 text-sm text-center tracking-wide">BACKGROUND ANIMATION BY ZENZAK ANIMATION.</h5>
		</footer>
	</div>
</div>

<style>
	/* --- NEW: Page Layout Container --- */
	.page-container {
		display: flex;
		flex-direction: column;
		align-items: center; /* This horizontally centers the main content and footer */
		min-height: 100dvh; /* Use dynamic viewport height for best mobile support */
		/* UPDATED: Using clamp for responsive horizontal and vertical padding */
		padding: clamp(1rem, 3vh, 2rem) clamp(1rem, 4vw, 2rem);
		box-sizing: border-box; /* Ensures padding is included in the element's total width and height */
	}

	/* --- MODIFIED: Home Content --- */
	.home-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center; /* This vertically centers your hero content */
		flex-grow: 1; /* This is key: it makes the main area expand to push the footer down */
		text-align: center;
		width: 100%;
		max-width: 1200px;
		margin-top: 2.5rem;
	}

	.title-container {
		position: relative;
		/* UPDATED: Proportional vertical padding and margin */
		padding: clamp(1rem, 2.5vh, 1.5rem) 0;
		margin: clamp(0.25rem, 1vh, 0.5rem) 0;
		width: 100%;
		max-width: 550px;
	}
	.title-container::before,
	.title-container::after {
		content: '';
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		width: 100%;
		height: 1px;
		background-color: rgba(255, 255, 255, 0.2);
	}
	.title-container::before {
		top: 0;
	}
	.title-container::after {
		bottom: 0;
	}
	.title {
		font-size: clamp(2rem, 6vw, 3.2rem);
		letter-spacing: 0.4em;
		margin: 0;
		padding: 0 1rem;
		font-weight: 200;
		color: #f0f0f0;
	}
	.subtitle {
		max-width: none;
		margin: 0;
		line-height: 1.8;
		font-size: clamp(1rem, 2.5vw, 1.2rem);
		font-weight: 600;
		color: #ccc;
		letter-spacing: 0.05em;
	}
	.subtitle-panel-wrapper {
		background: rgba(227, 227, 240, 0);
		-webkit-backdrop-filter: blur(5px);
		backdrop-filter: blur(5px);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 18px;
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		/* UPDATED: Proportional vertical padding and margin */
		padding: clamp(0.5rem, 2vh, 1rem) clamp(1rem, 5vw, 2rem);
		margin: clamp(1.5rem, 4vh, 2rem) 0 clamp(2rem, 5vh, 3rem) 0;
		max-width: 500px;
		width: 100%;
	}

	.quote-button-wrapper {
		/* UPDATED: Proportional bottom margin */
		margin-bottom: clamp(2rem, 6vh, 4rem);
	}

	/* --- MODERN NAVIGATION STYLES --- */
	.main-nav {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 0.5rem;
		width: 100%;
		max-width: 700px;
		/* UPDATED: Proportional bottom margin */
		margin-bottom: clamp(2rem, 5vh, 3rem);
	}

	/* --- MODIFIED: Footer Credit --- */


	.app-container {
		position: relative;
		min-height: 100dvh;
		display: flex;
		flex-direction: column;
		align-items: stretch;
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

	@media (prefers-reduced-motion: reduce) {
		video {
			display: none;
		}
		.background-video-container {
			background: var(--poster-url);
		}
	}
</style>
