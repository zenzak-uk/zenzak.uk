<script>
	let {
		href = null,
		children,
		variant = 'outline', // 'outline' | 'fill'
		size = 'normal', // 'normal' | 'large'
		...rest
	} = $props();
</script>

{#if href}
	<!-- If an href is passed, render an anchor tag -->
	<a
		{href}
		{...rest}
		class="
            inline-flex items-center justify-center rounded-full
            font-medium tracking-wider uppercase
            backdrop-blur-lg transition-all duration-200
            ease-in-out
            {size === 'normal' ? 'px-6 py-3 text-sm' : ''}
            {size === 'large' ? 'px-8 py-4 text-base' : ''}
            {variant === 'outline'
			? 'border border-gray-400 bg-white/10 text-gray-300 hover:border-gray-200 hover:bg-white/20 hover:text-white'
			: ''}
            {variant === 'fill'
			? 'border border-gray-200 bg-gray-200 text-gray-800 hover:border-white hover:bg-white'
			: ''}
        "
	>
		{@render children()}
	</a>
{:else}
	<!-- Otherwise, render a button -->
	<button
		{...rest}
		class="
            inline-flex items-center justify-center rounded-full
            font-medium tracking-wider uppercase
            backdrop-blur-lg transition-all duration-200
            ease-in-out
            {size === 'normal' ? 'px-6 py-3 text-sm' : ''}
            {size === 'large' ? 'px-8 py-4 text-base' : ''}
            {variant === 'outline'
			? 'border border-gray-400 bg-white/10 text-gray-300 hover:border-gray-200 hover:bg-white/20 hover:text-white'
			: ''}
            {variant === 'fill'
			? 'border border-gray-200 bg-gray-200 text-gray-800 hover:border-white hover:bg-white'
			: ''}
        "
	>
		{@render children()}
	</button>
{/if}
