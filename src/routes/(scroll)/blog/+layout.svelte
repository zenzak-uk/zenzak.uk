<script>
	// Get the children prop, which is the page content being rendered.
	let { children } = $props();
</script>

<div
	class="t-32 rounded-2xl border border-white/20 bg-white/10 p-6 shadow-lg backdrop-blur-md dark:bg-black/20"
>
	{@render children()}
</div>
