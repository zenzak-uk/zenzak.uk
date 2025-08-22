<script>
	let { children } = $props();

	import '../app.css';

	import { page } from '$app/stores';

	// Using $derived for reactive SEO data in runes mode
	const seoData = $derived({
		title: $page.data.seo?.title || 'Zenzak Animation | Engineering-Grade 3D Animation',
		description:
			$page.data.seo?.description ||
			'Transform complex engineering concepts into stunning 3D animations.',
		image: $page.data.seo?.image || 'https://zenzak.uk/',
		url: $page.url.href,
		...($page.data.seo || {})
	});
</script>

<svelte:head>
  <title>{seoData.title}</title>
  <meta name="description" content={seoData.description} />
  
  <!-- Open Graph -->
  <meta property="og:title" content={seoData.title} />
  <meta property="og:description" content={seoData.description} />
  <meta property="og:image" content={seoData.image} />
  <meta property="og:url" content={seoData.url} />
  <meta property="og:type" content="website" />
  
  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:title" content={seoData.title} />
  <meta property="twitter:description" content={seoData.description} />
  <meta property="twitter:image" content={seoData.image} />
  
  <!-- Canonical URL -->
  <link rel="canonical" href={seoData.url} />
</svelte:head>

{@render children()}
