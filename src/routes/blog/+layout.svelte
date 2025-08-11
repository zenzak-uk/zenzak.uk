<script>
	// Get the children prop, which is the page content being rendered.
	let { children } = $props();
</script>

<div class="blog-wrapper">

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
	
	main {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
	}
</style>
