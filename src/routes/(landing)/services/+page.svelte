<!-- src/routes/services/+page.svelte -->
<script>
	import Services from '$lib/components/Services.svelte';
	import SEO from '$lib/components/SEO/index.svelte';
	const seoProps = {
		title: '3D Animation for Engineering, Marketing & Startups | Zenzak Animation',
		metadescription:
			'Zenzak Animation offers full-cycle 3D services, from product visualization and technical explainers to UI/UX demos. We help startups, engineers, and marketers bring their vision to market.'
	};
</script>

<SEO {...seoProps} />

<div class="page-content-wrapper">
	<Services />
</div>

<style>
	.page-content-wrapper {
		width: 100%;
		max-width: 1200px;
		padding: 4rem 2rem;
		margin: 2rem 0;
		background: rgba(10, 10, 10, 0.5);
		border-radius: 16px;
		-webkit-backdrop-filter: blur(10px);
		backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.1);
		color: #ccc;
	}
</style>
