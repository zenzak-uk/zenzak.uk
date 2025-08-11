<script>
	// Use let for props in Svelte 5.
	// `href` is optional, defaulting to null.
	// `...rest` captures any other attributes like `onclick`.
	let { href = null, children, variant = 'outline', ...rest } = $props();
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
		padding: 0.7rem 1.5rem; /* Adjusted for consistency */
		border-radius: 30px; /* Rounded buttons look great in forms */
		font-family: inherit;
		font-size: 0.9rem;
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		cursor: pointer;
		transition: all 0.2s ease;

		/* Default to outline style */
		background-color: transparent;
		color: #ccc;
		border: 1px solid #666;
	}

	.btn:hover {
		color: #fff;
		border-color: #888;
		background-color: rgba(255, 255, 255, 0.1);
	}

	/* "Fill" variant for primary actions */
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
</style>