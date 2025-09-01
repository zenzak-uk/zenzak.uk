<!-- src/routes/services/+page.svelte -->
<script>
	import Solutions from '$lib/components/Solutions.svelte';
	import SEO from '$lib/components/SEO/index.svelte';
	const seoProps = {
		title: 'Zenzak Animation | Launch-Ready 3D Product Renders & Animation',
		metadescription:
			'Transform your product concepts into stunning, launch-ready visuals. Zenzak Animation offers expert 3D modeling, sculpting, and animation services designed to make your products stand out. Get your centerpiece imagery here.'
	};
</script>

<SEO {...seoProps} />

<div class="w-full max-w-screen-xl mx-auto px-8 py-16 my-8 bg-brand/950 rounded-2xl backdrop-blur-[10px] border border-white/10 text-gray-200">
	<Solutions />
</div>