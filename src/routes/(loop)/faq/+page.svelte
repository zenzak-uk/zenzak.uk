<!-- src/routes/services/+page.svelte -->
<script>
	import Faq from '$lib/components/Faq.svelte';
	import SEO from '$lib/components/SEO/index.svelte';
	const seoProps = {
		title: 'FAQ | 3D Animation & Product Visualization Questions Answered',
		metadescription:
			'Get answers to common questions about 3D animation, product visualization, and design services at Zenzak Animation. Learn about our process, timeline, and pricing.'
	};
</script>

<SEO {...seoProps} />

<div class="page-content-wrapper">
	<h1 class="page-title">Frequently Asked Questions</h1>
		<Faq />
</div>

<style>
	.page-content-wrapper {
		width: 100%;
		max-width: 1200px;
		padding: 4rem 2rem;
		margin: 4rem 0;
		background: rgba(10, 10, 10, 0.5);
		border-radius: 16px;
		-webkit-backdrop-filter: blur(10px);
		backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.1);
		color: #ccc;
	}

	.page-title {
		font-size: clamp(2rem, 5vw, 2.8rem);
		color: #f0f0f0;
		text-align: center;
		margin-bottom: 2rem;
	}

</style>