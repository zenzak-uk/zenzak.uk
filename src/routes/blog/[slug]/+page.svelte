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
		background: rgba(5, 5, 5, 0.45);
		border-radius: 12px;
		-webkit-backdrop-filter: blur(10px);
		backdrop-filter: blur(10px);
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

	/* --- NEW: Comprehensive Markdown Element Styling --- */

	/* General Heading Styles */
	.content-body :global(h1),
	.content-body :global(h2),
	.content-body :global(h3),
	.content-body :global(h4) {
		color: #f0f0f0;
		font-weight: 500;
		margin-top: 1em;
		margin-bottom: 0.25em;
		line-height: 1.3;
	}

	.content-body :global(h2) {
		font-size: 1.8rem;
		letter-spacing: 0.05em;
		border-bottom: 1px solid rgba(255, 255, 255, 0.2);
		padding-bottom: 0.5rem;
	}

	.content-body :global(h3) {
		font-size: 1.5rem;
	}

	.content-body :global(h4) {
		font-size: 1.2rem;
	}
    
	.content-body :global(strong) {
		color: #fff;
        font-weight: 500;
	}

    /* Links */
    .content-body :global(a) {
        color: #8ab4f8; /* A nice, readable blue */
        text-decoration: none;
        border-bottom: 1px solid #8ab4f830;
        transition: background-color 0.2s;
    }
    .content-body :global(a:hover) {
        background-color: #8ab4f820;
    }

    /* Lists (Ordered and Unordered) */
    .content-body :global(ul),
    .content-body :global(ol) {
        padding-left: 2rem;
    }
    .content-body :global(li) {
        margin-bottom: 0.75rem;
    }

    /* Blockquotes */
    .content-body :global(blockquote) {
        margin-left: 0;
        padding-left: 1.5rem;
        border-left: 3px solid rgba(255, 255, 255, 0.3);
        color: rgba(255, 255, 255, 0.8);
        font-style: italic;
    }
    .content-body :global(blockquote p) {
        font-size: 1.05rem;
    }

    /* Code Blocks and Inline Code */
    .content-body :global(p > code),
    .content-body :global(li > code) {
        background-color: #2a2a2a;
        color: #f0f0f0;
        padding: 0.2em 0.4em;
        border-radius: 4px;
        font-size: 0.9em;
    }
    .content-body :global(pre) {
        background-color: #1e1e1e;
        padding: 1rem;
        border-radius: 8px;
        overflow-x: auto;
        font-size: 0.95em;
    }
    .content-body :global(pre code) {
        font-family: 'Courier New', Courier, monospace;
        color: #d4d4d4;
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
