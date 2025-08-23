<script>
	let { data } = $props();
	const PostContent = data.content;
</script>

<article class="prose prose-zinc dark:prose-invert lg:prose-lg mx-auto px-2">
	<p class="mt-24">
		Published on {new Date(data.meta.date).toLocaleDateString('en-GB', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		})}
	</p>

	<div class="content-body">
			<h1>{data.meta.title}</h1>
 
         <PostContent />
     </div>

	<a href="/blog" class="back-link">&larr; Back to all posts</a>
</article>