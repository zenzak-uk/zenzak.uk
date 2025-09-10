<script>
	import Contact from '$lib/components/Contact.svelte';
	import SEO from '$lib/components/SEO/index.svelte';
	const seoProps = {
		title: 'Contact ZENZAK | Start Your 3D Animation Project',
		metadescription:
			'Ready to bring your vision to life? Contact ZENZAK to discuss your project. I translate complex engineering ideas into clear, persuasive 3D product animations and technical renders. Schedule your free discovery call today.'
	};
</script>

<SEO {...seoProps} />

<div
	class="mx-auto my-30 w-full max-w-screen-xl rounded-2xl bg-black/5 px-8 py-16 text-gray-200 backdrop-blur-[10px]"
>
	<h1 class="page-title">Get in Touch</h1>
	<Contact />
</div>

<style>
	.page-title {
		font-size: clamp(2rem, 5vw, 2.8rem);
		color: #f0f0f0;
		text-align: center;
		margin-bottom: 2rem;
	}
</style>
