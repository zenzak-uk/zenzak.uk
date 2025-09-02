<script>
	let { children } = $props();
</script>

<div
	class="bg-black/5 mx-auto my-30 w-full max-w-screen-xl rounded-2xl border border-white/10 px-8 py-16 text-gray-200 backdrop-blur-[10px]"
>
	{@render children()}
</div>
