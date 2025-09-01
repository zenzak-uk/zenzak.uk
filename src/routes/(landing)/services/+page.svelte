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

<div class="w-full max-w-screen-xl mx-auto px-8 py-16 my-8 bg-brand/950 rounded-2xl backdrop-blur-[10px] border border-white/10 text-gray-200">
	<Services />
</div>