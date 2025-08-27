<script>
	import { Card } from '$lib/components/ui/card';

	let { children, class: className = '', ...props } = $props();
</script>

<Card class="border-border/30 bg-card/20 backdrop-blur-sm {className}" {...props}>
	{@render children()}
</Card>
