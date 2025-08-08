<script>
	let { data } = $props();
    // In Svelte 5, we assign the component to a capitalized variable.
	const PostContent = data.content;
</script>

<article class="post-content">
	<h1>{data.meta.title}</h1>
	<p class="post-meta">
		Published on {new Date(data.meta.date).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		})}
	</p>

	<div class="content-body">
		<!-- OLD WAY: <svelte:component this={data.content} /> -->
		
        <!-- NEW SVELTE 5 WAY: -->
		<PostContent />
	</div>

	<a href="/blog" class="back-link">&larr; Back to all posts</a>
</article>

<style>
	.post-content {
		max-width: 700px;
		margin: 4rem auto;
		padding: 2rem;
		width: 90%;
	}
	h1 {
		font-size: 2.5rem;
		line-height: 1.2;
		margin-bottom: 1rem;
		color: #f0f0f0;
		font-weight: 400;
	}
	.post-meta {
		color: #aaa;
		margin-bottom: 3rem;
	}
	.content-body {
		line-height: 1.8;
		font-size: 1.1rem;
		color: #ccc;
	}
	/* Style markdown elements */
	.content-body :global(h2) {
		font-weight: 500;
		letter-spacing: 0.05em;
		margin-top: 3rem;
		margin-bottom: 1rem;
		border-bottom: 1px solid rgba(255, 255, 255, 0.2);
		padding-bottom: 0.5rem;
	}
	.content-body :global(strong) {
		color: #fff;
	}
	.back-link {
		display: inline-block;
		margin-top: 4rem;
		color: #ccc;
		text-decoration: none;
		border: 1px solid rgba(255, 255, 255, 0.3);
		padding: 0.5rem 1rem;
		border-radius: 4px;
		transition: all 0.2s;
	}
	.back-link:hover {
		background-color: #fff;
		color: #000;
		border-color: #fff;
	}
</style>