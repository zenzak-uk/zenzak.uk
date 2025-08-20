<script>
  import { Card } from '$lib/components/ui/card';
  
  let { children, class: className = '', ...props } = $props();
</script>

<Card 
  class="bg-card/20 border-border/30 backdrop-blur-sm {className}" 
  {...props}
>
  {@render children()}
</Card>