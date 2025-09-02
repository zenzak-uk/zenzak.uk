<!-- layout.svelte -->
<script lang="ts">
	import CanvasPortalTarget, { clearAllSnippets } from '$lib/components/CanvasPortalTarget.svelte';
	import { Canvas } from '@threlte/core';
	import { beforeNavigate } from '$app/navigation';
	import type { Snippet } from 'svelte';
	import '../../app.css';
	import Header from '$lib/components/Header.svelte';

	let { children }: { children: Snippet } = $props();

	// Clear all portal snippets before navigation
	beforeNavigate(() => {
		clearAllSnippets();
	});
</script>

<Header />

<div class="pointer-events-auto absolute inset-0 z-10">
	<Canvas>
		<CanvasPortalTarget />
	</Canvas>
</div>

{@render children()}
