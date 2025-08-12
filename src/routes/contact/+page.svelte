<!-- src/routes/services/+page.svelte -->
<script>
	// You can import any child components this page might need
	// For example, if Services.svelte was complex and had its own components
	import Contact from '$lib/components/Contact.svelte';
</script>

<div class="page-content-wrapper">
	<h1 class="page-title">Get in Touch</h1>
	<div class="content-area">
		<!-- Previously, this was your <Services /> component -->
		<Contact />
	</div>
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

	.content-area {
		line-height: 1.7;
	}
</style>