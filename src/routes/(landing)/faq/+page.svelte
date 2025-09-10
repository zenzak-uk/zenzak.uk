<script>
	import Faq from '$lib/components/Faq.svelte';
	import SEO from '$lib/components/SEO/index.svelte';
	const seoProps = {
		title: '3D Animation FAQ: Process, Cost & Timelines | Zenzak Animation',
		metadescription:
			'Get clear answers on our 3D animation process, project costs, and timelines. Discover the unique benefits of our engineer-led approach and start your project with confidence.'
	};
</script>

<SEO {...seoProps} />

<div
	class="mx-auto my-30 w-full max-w-screen-xl rounded-2xl bg-black/5 px-8 py-16 text-gray-200 backdrop-blur-[10px]"
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
