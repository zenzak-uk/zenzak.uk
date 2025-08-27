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

<div class="page-content-wrapper">
	<div class="content-area">
		<Solutions />
	</div>
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
