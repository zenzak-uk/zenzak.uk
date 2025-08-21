<script>
	// Get the children prop, which is the page content being rendered.
	let { children } = $props();
</script>

<div class="rounded-2xl border border-white/20 bg-white/10 dark:bg-black/20 backdrop-blur-md shadow-lg p-20">

	<main>
		{@render children()}
	</main>
</div>

<style>
	
	main {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
	}
</style>
