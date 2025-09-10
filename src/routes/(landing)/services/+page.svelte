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

<div
	class="mx-auto my-8 w-full max-w-screen-xl rounded-2xl bg-black/5 px-8 py-16 text-gray-200 backdrop-blur-[10px]"
>
	<Services />
</div>
