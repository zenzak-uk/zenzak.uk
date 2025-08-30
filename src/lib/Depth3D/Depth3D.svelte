<script lang="ts">
	// Credit for the Depth3D components:  Author: flo-bit
	//  Source: https://flo-bit.dev/svelte-depth-3d-component/
	import { Canvas } from '@threlte/core';
	import Scene3D from './Scene3D.svelte';

	export let image: {
		image: string;
		depth: string;
	};
</script>

<Canvas>
	<Scene3D {image} {...$$restProps} />
</Canvas>
