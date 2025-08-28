<script lang="ts">
	import { Canvas } from '@threlte/core';
	import { World } from '@threlte/rapier';
	import Scene from './Scene.svelte';
</script>

<div class="canvas-container">
	<Canvas>
		<World gravity={[0, 0, 0]}>
			<Scene />
		</World>
	</Canvas>
</div>

<style>
	.canvas-container {
		position: fixed;
		inset: 0;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
	}
</style>
