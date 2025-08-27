<!-- src/lib/components/Modal.svelte (Corrected, Layout Preserved) -->
<script>
	import { fade } from 'svelte/transition';

	let { children, onclose } = $props();

	function handleKeydown(event) {
		if (event.key === 'Escape') {
			onclose();
		}
	}

	let modalContentEl = $state(null);

	$effect(() => {
		if (modalContentEl) {
			modalContentEl.focus();
		}
	});
</script>

<svelte:window onkeydown={handleKeydown} />

<div
	class="overlay"
	onmousedown={onclose}
	role="button"
	tabindex="-1"
	aria-label="Close modal"
	transition:fade={{ duration: 200 }}
>
	<div
		bind:this={modalContentEl}
		class="modal-content"
		onmousedown={(e) => e.stopPropagation()}
		role="dialog"
		aria-modal="true"
		tabindex="-1"
		transition:fade={{ duration: 200, delay: 50 }}
	>
		<button class="close-button" onclick={onclose} aria-label="Close">
			<!-- Using a perfectly centered SVG icon -->
			<svg class="close-icon" aria-hidden="true" viewBox="0 0 24 24">
				<path d="M18 6L6 18M6 6l12 12" />
			</svg>
		</button>
		{@render children()}
	</div>
</div>

<style>
	/* ... .overlay and .modal-content styles are unchanged ... */
	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.25);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 100;
	}
	.overlay:focus {
		outline: none;
	}
	.modal-content {
		background: rgba(5, 5, 5, 0.7);
		border-radius: 12px;
		-webkit-backdrop-filter: blur(10px);
		backdrop-filter: blur(10px);
		padding: 2rem;
		max-width: 700px;
		width: 90%;
		position: relative;
		max-height: 85vh;
		overflow-y: auto;
		scrollbar-width: thin;
		scrollbar-color: #555 transparent;
	}
	.modal-content:focus {
		outline: none;
	}

	/* --- MODIFIED CSS FOR THE BUTTON --- */
	.close-button {
		/* Original positioning and dimensions */
		position: absolute;
		top: 10px;
		right: 15px;
		width: 35px;
		height: 35px;

		/* Flexbox for centering the SVG inside */
		display: flex;
		align-items: center;
		justify-content: center;

		/* Reset button defaults and set shape */
		padding: 0;
		border: none;
		background: transparent;
		border-radius: 50%;
		cursor: pointer;

		/* Original color and hover transition */
		color: #aaa;
		transition:
			background-color 150ms ease-out,
			color 150ms ease-out;
	}

	.close-button:hover {
		color: white;
		background-color: rgba(255, 255, 255, 0.1);
	}

	.close-icon {
		/* Sizing the icon to fit nicely within the 35px circle */
		width: 20px; /* Adjust if needed */
		height: 20px;

		/* SVG styling for the X */
		stroke: currentColor; /* Inherits color from .close-button */
		stroke-width: 2.5;
		stroke-linecap: round;
	}
</style>
