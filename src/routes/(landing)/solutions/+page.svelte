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

<section class="py-16 pb-24">
	<div
		class="mx-auto my-8 w-full max-w-screen-xl rounded-2xl border border-white/10 bg-black/5 px-8 py-16 text-gray-200 backdrop-blur-[10px]"
	>
		<Solutions />
	</div>
</section>
