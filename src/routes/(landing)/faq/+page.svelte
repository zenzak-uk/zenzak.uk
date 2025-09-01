<!-- src/routes/services/+page.svelte -->
<script>
	import Faq from '$lib/components/Faq.svelte';
</script>

<div class="w-full max-w-screen-xl mx-auto px-8 py-16 my-30 bg-brand/950 rounded-2xl backdrop-blur-[10px] border border-white/10 text-gray-200">
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
