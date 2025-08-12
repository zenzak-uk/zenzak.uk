<script>
	// We use state to track if the video should be visible.
	let showVideo = $state(false);
</script>

<svelte:head>
	<link rel="stylesheet" href="$lib/styles/content.css" />
</svelte:head>

<div class="content-wrapper">
	<hr />

	<h3>WHERE I CREATE VALUE:</h3>

	<ul>
		<li>
			<strong>For Startups: Secure Funding.</strong> Turn your pitch deck into an undeniable demonstration
			of value with a product animation that proves your concept is brilliant and ready.
		</li>
		<li>
			<strong>For Engineering Firms: Win Bids.</strong> Eliminate ambiguity and showcase the superiority
			of your mechanisms with technically-perfect animations that leave no room for doubt.
		</li>
		<li>
			<strong>For Marketing Teams: Drive Sales.</strong> I create scroll-stopping content that turns
			dense features into must-have benefits, captivating your audience and boosting conversion.
		</li>
		<li>
			<strong>For Product Designers: Impress Clients.</strong> Move beyond static blueprints. Present
			your work with photorealistic renders that showcase every detail and win immediate client approval.
		</li>
	</ul>

	<div class="video-container">
		{#if showVideo}
			<!-- This iframe is only rendered AFTER the click. -->
			<!-- The `&autoplay=1` parameter makes it play immediately. -->
			<iframe
				src="https://player.vimeo.com/video/1099649861?h=00ba6dd0ad&dnt=1&autoplay=1"
				width="100%"
				height="100%"
				frameborder="0"
				allow="fullscreen; picture-in-picture"
				allowfullscreen
				title="Zenzak Portfolio Video"
			></iframe>
		{:else}
			<!-- This is the clickable thumbnail that loads instantly. -->
			<button
				class="video-thumbnail"
				onclick={() => (showVideo = true)}
				aria-label="Play portfolio video"
			>
				<!-- Your local thumbnail image -->
				<img src="/thumb.jpg" alt="Portfolio showreel thumbnail" class="thumbnail-image" />
				<!-- A simple SVG play button icon -->
				<div class="play-button-icon">
					<svg viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
						<circle cx="35" cy="35" r="35" fill="white" fill-opacity="0.2" />
						<circle cx="35" cy="35" r="29" stroke="white" stroke-opacity="0.8" stroke-width="2" />
						<path d="M49 35L28.75 47.1244L28.75 22.8756L49 35Z" fill="white" />
					</svg>
				</div>
			</button>
		{/if}
	</div>

	<h3>Engineering-Grade 3D Animation</h3>
	<h4>
		Your vision is technically brilliant. But can your investors, clients, and customers truly see
		it?
	</h4>
	<strong>I bridge the gap.</strong> As a mechanical engineer, I speak your language. As a 3D animator, I translate it
	for the world.
</div>

<style>
	/* --- Video Player Styles --- */
	.video-container {
		margin-top: 2rem;
		margin-bottom: 2rem;
		aspect-ratio: 16 / 9;
		width: 100%;
		border-radius: 8px;
		overflow: hidden;
		background-color: #111; /* Fallback color */
	}

	iframe {
		width: 100%;
		height: 100%;
		border: 0;
	}

	.video-thumbnail {
		position: relative;
		width: 100%;
		height: 100%;
		padding: 0;
		border: 0;
		cursor: pointer;
	}

	.thumbnail-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		transition: filter 0.3s ease;
	}

	.video-thumbnail:hover .thumbnail-image {
		filter: brightness(0.8);
	}

	.play-button-icon {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 70px; /* Match the SVG viewBox width */
		height: 70px;
		pointer-events: none; /* Allows clicks to go through to the button */
		transition: transform 0.3s ease;
	}

	.video-thumbnail:hover .play-button-icon {
		transform: translate(-50%, -50%) scale(1.1);
	}
</style>
