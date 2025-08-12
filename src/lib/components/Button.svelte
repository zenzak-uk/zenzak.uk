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
	<a {href} {...rest} class="btn" class:fill={variant === 'fill'}>
		{@render children()}
	</a>
{:else}
	<!-- Otherwise, render a button -->
	<button {...rest} class="btn" class:fill={variant === 'fill'}>
		{@render children()}
	</button>
{/if}

<style>
	.btn {
		/* Shared base styles */
		display: inline-flex;
		align-items: center;
		justify-content: center;
		border-radius: 30px;
		font-family: inherit;
		text-transform: uppercase;
		text-decoration: none;
		cursor: pointer;
		transition: all 0.2s ease;
		font-weight: 500;
		letter-spacing: 0.1em;
		flex-shrink: 0; /* Prevent buttons from shrinking in flex layouts */

		/* --- SIZE: Normal (default) --- */
		padding: 0.7rem 1.5rem;
		font-size: 0.9rem;

		/* --- VARIANT: Outline (default) --- */
		background-color: transparent;
		color: #ccc;
		border: 1px solid #666;
	}

	.btn:hover {
		color: #fff;
		border-color: #888;
		background-color: rgba(255, 255, 255, 0.1);
	}

	/* --- VARIANT: Fill --- */
	.btn.fill {
		background-color: #f0f0f0;
		color: #121212;
		border-color: #f0f0f0;
	}

	.btn.fill:hover {
		background-color: #fff;
		border-color: #fff;
		color: #121212;
	}

	/* --- SIZE: Large --- */
	.btn.large {
		padding: 1rem 2rem; /* More padding */
		font-size: 1rem; /* Larger font */
	}
</style>
