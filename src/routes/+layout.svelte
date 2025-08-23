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

{@render children()}
