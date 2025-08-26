<script>
	import Contact from '$lib/components/Contact.svelte';

	import SEO from '$lib/components/SEO/index.svelte';
	const seoProps = {
		title: 'Contact Zenzak Animation | Get Your 3D Project Quote',
		metadescription:
			'Ready to bring your vision to life? Contact Zenzak Animation for engineering-grade 3D animation, product visualization, and design services. Get your free project consultation today.'
	};
</script>

<SEO {...seoProps} />

<div class="page-content-wrapper">
	<h1 class="page-title">Get in Touch</h1>
		<Contact />
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