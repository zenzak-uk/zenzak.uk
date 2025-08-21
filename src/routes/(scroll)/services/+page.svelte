<!-- src/routes/services/+page.svelte -->
<script>
	// You can import any child components this page might need
	// For example, if Services.svelte was complex and had its own components
	import Services from '$lib/components/Services.svelte';
</script>

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