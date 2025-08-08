<!-- src/lib/components/Modal.svelte (Corrected) -->
<script>
	import { fade } from 'svelte/transition';

	// MODERNIZED:
	// - Removed `createEventDispatcher`.
	// - We now accept `onclose` as a required callback prop using $props().
	let { children, onclose } = $props();

	function handleKeydown(event) {
		if (event.key === 'Escape') {
			onclose(); // Call the prop directly
		}
	}

	let modalContentEl = $state(null);

	$effect(() => {
		if (modalContentEl) {
			modalContentEl.focus();
		}
	});
</script>

<!-- MODERNIZED: Use event attributes (onkeydown) instead of directives (on:keydown) -->
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
		<button class="close-button" onclick={onclose} aria-label="Close">×</button>
		{@render children()}
	</div>
</div>

<style>
	/* Styles remain the same */
	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.8);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 100;
	}
	.overlay:focus {
		outline: none;
	}
	.modal-content {
		background-color: #121212;
		padding: 2rem 3rem;
		border-radius: 8px;
		max-width: 700px;
		width: 90%;
		position: relative;
		max-height: 85vh;
		overflow-y: auto;
		border: 1px solid rgba(255, 255, 255, 0.1);
	}
	.modal-content:focus {
		outline: none;
	}
	.close-button {
		position: absolute;
		top: 10px;
		right: 15px;
		font-size: 2rem;
		color: #aaa;
		width: 35px;
		height: 35px;
		display: flex;
		align-items: center;
		justify-content: center;
		line-height: 1;
		border-radius: 50%;
	}
	.close-button:hover {
		color: white;
		background-color: rgba(255, 255, 255, 0.1);
	}
</style>