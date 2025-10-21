<script>
	import ogSquareImageSrc from '$lib/assets/featured-square.avif';
	import ogImageSrc from '$lib/assets/featured.avif';
	import twitterImageSrc from '$lib/assets/featured.avif';
	import featuredImageSrc from '$lib/assets/featured.avif';
	import website from '$lib/config/website';
	import OpenGraph from './OpenGraph.svelte';
	import SchemaOrg from './SchemaOrg.svelte';
	import Twitter from './Twitter.svelte';

	const {
		author,
		entity,
		facebookAuthorPage,
		facebookPage,
		ogLanguage,
		siteLanguage,
		siteShortTitle,
		siteTitle,
		siteUrl,
		githubPage,
		linkedinProfile,
		telegramUsername,
		tiktokUsername,
		twitterUsername,
		vimeoProfile
	} = website;

	const defaultAlt = '3D Animation and Product Visualisation by Zenzak Studio';

	let {
		article = false,
		breadcrumbs = [],
		entityMeta = null,
		lastUpdated = new Date().toISOString(),
		datePublished = new Date().toISOString(),
		metadescription = "Zenzak Studio is Edinburgh's independent visualisation studio. 3D animation, product visualisation, and design services to bring your vision to life.",
		slug = '',
		timeToRead = 0,
		title = "Edinburgh's design, visualisation, and animation studio",
		featuredImage = {
			url: featuredImageSrc,
			alt: 'A stunning product render created by Zenzak Studio.',
			width: 1200,
			height: 675,
			caption: 'Zenzak Studio: From Concept to Production-Ready Visuals'
		},
		ogImage = {
			url: ogImageSrc,
			alt: defaultAlt
		},
		ogSquareImage = {
			url: ogSquareImageSrc,
			alt: defaultAlt
		},
		twitterImage = {
			url: twitterImageSrc,
			alt: defaultAlt
		}
	} = $props();

	const url = `${siteUrl}/${slug}`;
	const pageTitle = `${title} | ${siteShortTitle}`;
	const openGraphProps = {
		article,
		datePublished,
		lastUpdated,
		image: ogImage,
		squareImage: ogSquareImage,
		metadescription,
		ogLanguage,
		pageTitle,
		siteTitle,
		url,
		...(article ? { datePublished, lastUpdated, facebookPage, facebookAuthorPage } : {})
	};
	const schemaOrgProps = {
		article,
		author,
		breadcrumbs,
		datePublished,
		entity,
		lastUpdated,
		entityMeta,
		featuredImage,
		metadescription,
		siteLanguage,
		siteTitle,
		siteTitleAlt: siteShortTitle,
		siteUrl,
		title: pageTitle,
		url,
		facebookPage,
		githubPage,
		linkedinProfile,
		telegramUsername,
		tiktokUsername,
		twitterUsername
	};
	const twitterProps = {
		article,
		author,
		twitterUsername,
		image: twitterImage,
		timeToRead
	};
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={metadescription} />
	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
	/>
</svelte:head>
<Twitter {...twitterProps} />
<OpenGraph {...openGraphProps} />
<SchemaOrg {...schemaOrgProps} />
