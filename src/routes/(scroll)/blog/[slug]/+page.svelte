<script>
	import SEO from '$lib/components/SEO/index.svelte';
	let { data } = $props();
	const PostContent = data.content;

	const seoProps = {
		title: data.meta.title,
		metadescription: data.meta.description,
		slug: `blog/${data.meta.slug}`,
		article: true,
		datePublished: new Date(data.meta.date).toISOString(),
		lastUpdated: new Date(data.meta.date).toISOString(),
		timeToRead: data.meta.timeToRead || 3,
		// Use tags as keywords if available
		...(data.meta.tags && { keywords: data.meta.tags.join(', ') })
	};
</script>

<SEO {...seoProps} />

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