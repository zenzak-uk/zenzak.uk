<script>
	// Use let for props in Svelte 5.
	// `href` is optional, defaulting to null.
	// `...rest` captures any other attributes like `onclick`.
	let { href = null, children, ...rest } = $props();
</script>

{#if href}
	<!-- If an href is passed, render an anchor tag -->
	<a {href} {...rest} class="btn">
		{@render children()}
	</a>
{:else}
	<!-- Otherwise, render a button -->
	<button {...rest} class="btn">
		{@render children()}
	</button>
{/if}

<style>
	.btn {
		/* All your shared styles go here, in one place! */
		flex-grow: 1;
		flex-basis: 160px;
		border: 1px solid rgba(255, 255, 255, 0.2);
		border-radius: 4px;
		padding: 0.8rem 1.6rem;
		transition: all 0.2s;
		font-size: 0.9rem;
		letter-spacing: 0.15em;
		color: #ccc;
		background: none;
		cursor: pointer;
		font-family: inherit;
		text-transform: uppercase;
		text-decoration: none;
		text-align: center;
		display: inline-flex;
		align-items: center;
		justify-content: center;
	}

	.btn:hover {
		color: black;
		background-color: white;
		border-color: white;
	}
</style>