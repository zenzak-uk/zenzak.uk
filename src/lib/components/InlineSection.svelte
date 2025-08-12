<!-- src/lib/components/InlineSection.svelte -->
<script>
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';

  let { id, title, children } = $props();
  let visible = $state(false);
  let element = $state(null);

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          visible = true;
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  });
</script>

<section {id} bind:this={element} class="inline-section">
  {#if visible}
    <div in:fly={{ y: 50, duration: 800, delay: 300 }}>
      <h2 class="section-title">{title}</h2>
      <div class="section-content">
        {@render children()}
      </div>
    </div>
  {/if}
</section>

<style>
  .inline-section {
    width: 100%;
    max-width: 1200px;
    padding: 4rem 2rem;
    margin: 4rem 0;
    background: rgba(10, 10, 10, 0.5);
    border-radius: 16px;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    min-height: 50vh; /* Ensure it has enough height to be observed */
  }

  .section-title {
    font-size: clamp(1.8rem, 5vw, 2.5rem);
    color: #f0f0f0;
    text-align: center;
    margin-bottom: 2rem;
  }

  .section-content {
    color: #ccc;
    line-height: 1.7;
  }
</style>