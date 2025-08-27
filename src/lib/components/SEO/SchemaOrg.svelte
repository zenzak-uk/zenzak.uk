<script>
	let {
		author,
		siteUrl,
		siteTitle,
		siteTitleAlt,
		entity,
		metadescription,
		url,
		title,
		featuredImage,
		datePublished,
		lastUpdated,
		siteLanguage,
		twitterUsername,
		githubPage,
		linkedinProfile,
		facebookPage
	} = $props();

	/**
	 * @type {{ url: string; faviconWidth: number; faviconHeight: number } | null}
	 */

	const schemaOrgOrganization = {
		'@type': 'ProfessionalService',
		'@id': `${siteUrl}/#organization`,
		name: 'Zenzak Animation',
		url: siteUrl,
		logo: `${siteUrl}/favicon.ico`,
		image: featuredImage.url,
		description: metadescription,
		sameAs: [
			`https://github.com/${githubPage}`,
			`https://uk.linkedin.com/company/${linkedinProfile}`,
			'https://vimeo.com/$(vimeoProfile)'
		],
		provider: {
			'@type': 'Person',
			name: author
		}
	};

	// Detailed Service Schemas
	const schemaOrgServices = {
		'@type': 'ItemList',
		itemListElement: [
			{
				'@type': 'ListItem',
				position: 1,
				item: {
					'@type': 'Service',
					name: 'Product Visualization & Renders',
					description:
						'The definitive hero shot for decks, campaigns, and e-commerce. Photorealistic images that demand attention and drive interest.',
					serviceType: '3D Rendering Service',
					audience: {
						'@type': 'Audience',
						audienceType: ['Marketing Teams', 'Product Designers']
					},
					provider: {
						'@id': `${siteUrl}/#organization`
					}
				}
			},
			{
				'@type': 'ListItem',
				position: 2,
				item: {
					'@type': 'Service',
					name: 'Technical & Explainer Animations',
					description:
						'Make the complex crystal-clear. Turn intricate mechanics and internal processes into intuitive visuals that educate and persuade.',
					serviceType: '3D Animation Service',
					audience: {
						'@type': 'Audience',
						audienceType: ['Engineering Firms', 'Startups']
					},
					provider: {
						'@id': `${siteUrl}/#organization`
					}
				}
			},
			{
				'@type': 'ListItem',
				position: 3,
				item: {
					'@type': 'Service',
					name: 'UI/UX & App Demonstrations',
					description:
						'Create & showcase a flawless user experience. Fluid interface animations for promos and tutorials that drive adoption.',
					serviceType: 'UI/UX Design Service',
					audience: {
						'@type': 'Audience',
						audienceType: ['Startups', 'Marketing Teams']
					},
					provider: {
						'@id': `${siteUrl}/#organization`
					}
				}
			}
			// Add more list items for other services like 'Concept Modeling & Sculpting', etc.
		]
	};

	const schemaOrgWebSite = {
		'@type': 'WebSite',
		'@id': `${siteUrl}/#website`,
		url: siteUrl,
		name: siteTitle,
		description: siteTitleAlt,
		publisher: {
			'@id': `${siteUrl}/#organization`
		},
		inLanguage: siteLanguage
	};

	const schemaOrgWebPage = {
		'@type': 'WebPage',
		'@id': `${url}#webpage`,
		url,
		name: title,
		isPartOf: {
			'@id': `${siteUrl}/#website`
		},
		primaryImageOfPage: {
			'@id': `${url}#primaryimage`
		},
		datePublished,
		dateModified: lastUpdated,
		description: metadescription,
		inLanguage: siteLanguage
	};

	const schemaOrgImageObject = {
		'@type': 'ImageObject',
		'@id': `${url}#primaryimage`,
		inLanguage: siteLanguage,
		url: featuredImage.url,
		contentUrl: featuredImage.url,
		width: featuredImage.width,
		height: featuredImage.height,
		caption: featuredImage.caption
	};

	const schemaOrgArray = [
		schemaOrgOrganization,
		schemaOrgServices,
		schemaOrgWebSite,
		schemaOrgWebPage,
		schemaOrgImageObject
	];

	const schemaOrgObject = {
		'@context': 'https://schema.org',
		'@graph': schemaOrgArray
	};
	let jsonLdString = JSON.stringify(schemaOrgObject);
	let jsonLdScript = `
		<script type="application/ld+json">
			${jsonLdString}
		${'<'}/script>
	`;
</script>

<svelte:head>
	{@html jsonLdScript}
</svelte:head>
