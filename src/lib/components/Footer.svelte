<script>
	const menuSections = [
		{
			title: 'Company',
			items: [
				{
					url: '/services',
					name: 'Services'
				},
				{
					url: '/solutions',
					name: 'Work'
				},
				{
					url: '/web',
					name: 'Web'
				},
				{
					url: '/contact',
					name: 'Contact'
				}
			]
		},
		{
			title: 'Social',
			items: [
				{
					url: 'https://github.com/zenzak-uk',
					name: 'Github'
				},
				{
					url: 'https://www.linkedin.com/company/zenzak/',
					name: 'LinkedIn'
				}
				{
					url: 'https://www.instagram.com/zenzakuk/',
					name: 'Instagram'
				}
			]
		}
	];

	function isInternal(menuItem) {
		return menuItem.url[0] === '/';
	}
</script>

<footer
	class="mt-16 flex flex-col items-center justify-center gap-4 bg-gradient-to-b from-zinc-950/60 to-zinc-950/90 p-4 font-normal text-slate-200"
>
	<ul class="grid list-none grid-cols-2 gap-12 py-4">
		{#each menuSections as menuSection}
			<li>
				<h3 class="text-bold !m-0 !p-0 text-lg font-bold uppercase">
					{menuSection.title}
				</h3>
				{#each menuSection.items as menuItem}
					<div>
						{#if isInternal(menuItem)}
							<a href={menuItem.url} class="text-normal !text-white !no-underline">
								{menuItem.name}
							</a>
						{:else}
							<a
								href={menuItem.url}
								target="_blank"
								rel="noopener noreferrer"
								class="text-normal !text-white !no-underline"
							>
								{menuItem.name}
							</a>
						{/if}
					</div>
				{/each}
			</li>
		{/each}
	</ul>

	<p class="my-4 block text-center font-bold text-slate-300">&copy; 2025 Zenzak</p>
</footer>
