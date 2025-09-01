<script>
	let { children } = $props();
</script>

<div class="w-full max-w-screen-xl mx-auto px-8 py-16 my-30 bg-brand/950 rounded-2xl backdrop-blur-[10px] border border-white/10 text-gray-200">
	{@render children()}
</div>
