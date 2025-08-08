<script>
	// Get the children prop, which is the page content being rendered.
	let { children } = $props();
</script>

<div class="blog-wrapper">
	<header class="blog-header">
		<a href="/" class="home-link" aria-label="Back to Homepage">
			<img src="/lightbulb.svg" alt="Zenzak Animation Home" class="home-icon" />
			<span>Zenzak Animation</span>
		</a>
	</header>

	<main>
		<!-- This renders the content of +page.svelte -->
		{@render children()}
	</main>
</div>

<style>
	.blog-wrapper {
		width: 100%;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	.blog-header {
		padding: 2rem 5%; /* Use 5% for left/right padding */
		display: flex;
		justify-content: center;
		width: 100%;
	}

	.home-link {
		display: inline-flex;
		align-items: center;
		gap: 0.75rem;
		text-decoration: none;
		color: #ccc;
		transition: color 0.2s ease;
	}

	.home-link:hover {
		color: #fff;
	}

	.home-icon {
		width: 32px;
		height: 32px;
	}

	.home-link span {
		font-weight: 300;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		border-left: 1px solid rgba(255, 255, 255, 0.2);
		padding-left: 0.75rem;
		font-size: 0.9rem;
	}

	main {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
	}
</style>
