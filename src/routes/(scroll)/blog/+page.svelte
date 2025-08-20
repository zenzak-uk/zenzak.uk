<script>
	// This helper function will process the raw data from our Markdown files
	async function getPosts() {
		const paths = import.meta.glob('/src/lib/posts/*.md', { eager: true });

		const posts = Object.entries(paths).map(([path, file]) => {
			const slug = path.split('/').pop()?.split('.').shift();
			const metadata = file.metadata;
			return { ...metadata, slug };
		});

        // Sort posts by date, newest first
		return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
	}

    // Use a promise to load the posts
    const postsPromise = getPosts();
</script>

<div class="blog-container">
	<h1>THE BLOG</h1>
	<p class="subtitle">Insights on technical animation, design, and market strategy.</p>
	<hr />

	{#await postsPromise}
		<p>Loading posts...</p>
	{:then posts}
		<div class="posts-list">
			{#each posts as post}
				<a href={`/blog/${post.slug}`} class="post-card">
					<h2>{post.title}</h2>
					<p class="post-date">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
					<p class="post-description">{post.description}</p>
					<span class="read-more">Read More &rarr;</span>
				</a>
			{/each}
		</div>
	{/await}
</div>


<style>
	.blog-container {
		max-width: 800px;
		margin: 4rem auto;
		padding: 1rem;
		width: 90%;
	}
	h1 {
			text-align: center;
			letter-spacing: 0.2em;
			font-weight: 300;
			font-size: 2.8rem; /* ≈44.8px */
			color: var(--text-color, #e0e0e0) !important;
			line-height: 1.3;
			margin-top: 0;
			margin-bottom: 0.5rem;
	}
	.subtitle {
		text-align: center;
		color: #ccc;
		margin-bottom: 0.5rem;
	}
	hr {
		border: 0;
		border-top: 1px solid rgba(255, 255, 255, 0.2);
		margin-bottom: 3rem;
	}
	.posts-list {
		display: grid;
		gap: 2rem;
	}
	.post-card {
		display: block;
		padding: 1.5rem;
		border: 1px solid rgba(255, 255, 255, 0.15);
		border-radius: 8px;
		text-decoration: none;
		color: inherit;
		transition:
			background-color 0.2s,
			border-color 0.2s;
	}
	.post-card:hover {
		background-color: rgba(255, 255, 255, 0.05);
		border-color: rgba(255, 255, 255, 0.4);
	}
	.post-card h2 {
		margin: 0 0 0.5rem 0;
		font-weight: 500;
		letter-spacing: 0.05em;
		color: #f0f0f0;
	}
	.post-date {
		font-size: 0.9rem;
		color: #888;
		margin-bottom: 1rem;
	}
    .post-description {
        color: #ccc;
        line-height: 1.6;
    }
	.read-more {
		display: inline-block;
		margin-top: 1rem;
		font-weight: 500;
		color: #fff;
	}
</style>