<!-- src/routes/services/+page.svelte -->
<script>
	import Faq from '$lib/components/Faq.svelte';
</script>

<div
	class="bg-brand/950 mx-auto my-30 w-full max-w-screen-xl rounded-2xl border border-white/10 px-8 py-16 text-gray-200 backdrop-blur-[10px]"
>
	<h1 class="page-title">Frequently Asked Questions</h1>
	<Faq />
</div>

<style>
	.page-title {
		font-size: clamp(2rem, 5vw, 2.8rem);
		color: #f0f0f0;
		text-align: center;
		margin-bottom: 2rem;
	}
</style>
