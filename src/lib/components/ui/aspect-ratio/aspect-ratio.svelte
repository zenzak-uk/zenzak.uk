<script>
	import { AspectRatio as AspectRatioPrimitive } from "bits-ui";

	let { ref = $bindable(null), ...restProps } = $props();
</script>

<AspectRatioPrimitive.Root bind:ref data-slot="aspect-ratio" {...restProps} />