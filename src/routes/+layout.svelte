<script>
	import '../app.css';
	// 1. Get the `children` prop, which is the new way to access default slot content.
	let { children } = $props();
</script>

<div class="app-container">
	<div class="background-video-container">
		<video autoplay muted loop playsinline>
			<!-- Make sure you have this video file in your /static folder -->
			<source src="videos/bg.mp4" type="video/mp4" />
			Your browser does not support the video tag.
		</video>
		<div class="video-overlay"></div>
	</div>

	<div class="content-container">
		<!-- 2. Use the {@render} tag to display the page content -->
		{@render children()}
	</div>
</div>

<style>
	.app-container {
		position: relative;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
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
	}

	@media (prefers-reduced-motion: reduce) {
		video {
			display: none;
		}
		.background-video-container {
			background: url('videos/poster.jpg');
		}
	}
</style>