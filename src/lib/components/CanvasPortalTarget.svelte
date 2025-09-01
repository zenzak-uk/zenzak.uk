<!-- CanvasPortalTarget.svelte -->
<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import { SvelteSet } from 'svelte/reactivity';

	let snippets = $state(new SvelteSet<Snippet>());

	export const addCanvasPortalSnippet = (snippet: Snippet) => {
		console.log('Adding snippet, total:', snippets.size + 1);
		snippets.add(snippet);
	};

	export const removeCanvasPortalSnippet = (snippet: Snippet) => {
		console.log('Removing snippet, had it:', snippets.has(snippet), 'total before:', snippets.size);
		snippets.delete(snippet);
		console.log('Total after removal:', snippets.size);
	};

	export const clearAllSnippets = () => {
		console.log('Clearing all snippets');
		snippets.clear();
	};
</script>

<script lang="ts">
	let currentSnippets = $derived(snippets);
	console.log('Rendering snippets:', currentSnippets.size);
</script>

{#each currentSnippets as snippet}
	{@render snippet()}
{/each}
