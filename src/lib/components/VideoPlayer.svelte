<script>
  import { createEventDispatcher } from 'svelte';
  
  export let videoUrl;
  export let thumbnailUrl;
  export let title = "Video";
  export let thumbnailAlt = "Video thumbnail";
  
  let showVideo = false;
  let imageLoaded = false;
  let imageError = false;
  let imgElement;
  
  const dispatch = createEventDispatcher();
  
  // Reactively check if image is loaded
  $: if (imgElement) {
    if (imgElement.complete && imgElement.naturalHeight !== 0) {
      imageLoaded = true;
    }
  }
  
  function playVideo() {
    showVideo = true;
    dispatch('play');
  }
  
  function handleImageLoad() {
    imageLoaded = true;
  }
  
  function handleImageError() {
    imageError = true;
  }
</script>

<div class="relative my-8 aspect-video w-full rounded-lg overflow-hidden bg-[#111]">
  {#if showVideo}
    <iframe
      src={videoUrl}
      allow="autoplay; fullscreen; picture-in-picture"
      allowfullscreen
      {title}
      class="w-full h-full border-0"
    />
  {:else}
    <button
      class="relative w-full h-full p-0 border-0 cursor-pointer bg-transparent block group"
      on:click={playVideo}
      aria-label="Play {title}"
    >
      <img
        bind:this={imgElement}
        src={thumbnailUrl}
        alt={thumbnailAlt}
        class="w-full h-full object-cover block transition-all duration-300 group-hover:brightness-[0.8]"
        on:load={handleImageLoad}
        on:error={handleImageError}
      />

      <!-- Loading state overlay -->
      {#if !imageLoaded && !imageError}
        <div class="absolute inset-0 flex items-center justify-center bg-[#111]">
          <div class="w-10 h-10 border-[3px] border-white/10 border-t-white/50 rounded-full animate-spin"></div>
        </div>
      {/if}

      <!-- Play button -->
      {#if imageLoaded}
        <div class="
          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
          w-[70px] h-[70px] pointer-events-none 
          transition-transform duration-300 group-hover:scale-110
        ">
          <slot name="play-icon">
            <svg viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="35" cy="35" r="35" fill="white" fill-opacity="0.2" />
              <circle cx="35" cy="35" r="29" stroke="white" stroke-opacity="0.8" stroke-width="2" />
              <path d="M49 35L28.75 47.1244L28.75 22.8756L49 35Z" fill="white" />
            </svg>
          </slot>
        </div>
      {/if}
    </button>
  {/if}
</div>