<script>
	let { data } = $props();
	const PostContent = data.content;
</script>

<article class="prose px-2 pt-24 prose-zinc lg:prose-lg lg:pt-28 dark:prose-invert">
	<p>
		Published on {new Date(data.meta.date).toLocaleDateString('en-GB', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		})}
	</p>

	<div>
		<h1>{data.meta.title}</h1>

		<PostContent />
	</div>

	<a href="/blog" class="back-link">&larr; Back to all posts</a>
</article>
