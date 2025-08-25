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

<div class="mx-auto mt-24 w-full max-w-3xl px-4">
    <h1 class="mb-2 mt-0 text-center text-5xl tracking-wider">
        THE BLOG
    </h1>
    <p class="mb-2 text-center">
        Insights on technical animation, design, and market strategy.
    </p>
    <hr class="mb-12 border-0 border-t border-white/20" />

    {#await postsPromise}
        <p class="text-neutral-300">Loading posts...</p>
    {:then posts}
        <div class="grid gap-8">
            {#each posts as post}
                <a
                    href={`/blog/${post.slug}`}
                    class="block rounded-lg border border-white/15 p-6 text-inherit no-underline transition-all duration-200 hover:border-white/40 hover:bg-white/5"
                >
                    <h2 class="mb-2 mt-0 font-medium tracking-wide text-neutral-100">
                        {post.title}
                    </h2>
                    <p class="mb-4 text-sm text-neutral-500">
                        {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </p>
                    <p class="leading-relaxed text-neutral-300">
                        {post.description}
                    </p>
                    <span class="mt-4 inline-block font-medium text-white">
                        Read More &rarr;
                    </span>
                </a>
            {/each}
        </div>
    {/await}
</div>
