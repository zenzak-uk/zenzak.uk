<script>
	import { base } from '$app/paths';
	import Header from '$lib/components/Header.svelte';
	let { children } = $props();
</script>


<Header></Header>

<Background class="app-container" style="--poster-url: url({base}/videos/poster.avif)">
	<div class="background-video-container">
		<video autoplay muted loop playsinline poster="{base}/videos/poster.avif">
			<source src="{base}/videos/bg.webm" type="video/webm" />
			<source src="{base}/videos/bg.mp4" type="video/mp4" />
			Your browser does not support the video tag.
		</video>
		<div class="video-overlay"></div>
	</div>
	<div class="content-container">
		{@render children()}
	</div>
</Background>

<style>
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

	.content-container {
		flex: 1 1 auto;
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 0;
		margin: 0;
		padding: 0;
		width: 100%;
	}

	.glass-card {
		width: min(92%, 900px);
		margin: 2.5rem auto;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: clamp(1rem, 3vw, 2.25rem);
		border-radius: 14px;
		background: rgba(255, 255, 255, 0.04);
		backdrop-filter: blur(10px) saturate(120%);
		-webkit-backdrop-filter: blur(10px) saturate(120%);
		border: 1px solid rgba(255, 255, 255, 0.06);
		box-shadow: 0 12px 30px rgba(0, 0, 0, 0.45);
		text-align: center;
	}

	.glass-inner {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
	}

	@media (prefers-reduced-transparency: reduce) {
		.glass-card {
			background: rgba(0, 0, 0, 0.5);
			backdrop-filter: none;
			-webkit-backdrop-filter: none;
			box-shadow: none;
		}
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
