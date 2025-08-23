<script>
	let { data } = $props();
	const PostContent = data.content;
</script>

<article class="prose prose-zinc dark:prose-invert lg:prose-lg px-2 pt-24 lg:pt-28">
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