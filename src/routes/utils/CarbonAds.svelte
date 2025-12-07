<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';

  let carbonContainer: HTMLDivElement;

  onMount(() => {
    if (!browser) return;

    // Load Carbon Ads script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://cdn.carbonads.com/carbon.js?serve=${import.meta.env.PUBLIC_CARBON_ZONE_ID}&placement=${import.meta.env.PUBLIC_CARBON_PLACEMENT}`;
    script.id = '_carbonads_js';

    if (carbonContainer) {
      carbonContainer.appendChild(script);
    }

    return () => {
      // Cleanup on unmount
      const existingScript = document.getElementById('_carbonads_js');
      if (existingScript) {
        existingScript.remove();
      }
    };
  });
</script>

<div bind:this={carbonContainer} class="my-8" />

<style>
  /* Optional: Custom styling for Carbon Ads */
  :global(#carbonads) {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  :global(#carbonads) {
    display: flex;
    max-width: 330px;
    background-color: hsl(0, 0%, 98%);
    box-shadow: 0 1px 4px 1px hsla(0, 0%, 0%, 0.1);
    border-radius: 4px;
    padding: 1rem;
  }

  :global(.dark #carbonads) {
    background-color: hsl(0, 0%, 10%);
  }

  :global(#carbonads a) {
    color: inherit;
    text-decoration: none;
  }

  :global(#carbonads a:hover) {
    color: inherit;
  }

  :global(#carbonads span) {
    position: relative;
    display: block;
    overflow: hidden;
  }

  :global(#carbonads .carbon-wrap) {
    display: flex;
  }

  :global(#carbonads .carbon-img) {
    display: block;
    margin: 0;
    line-height: 1;
  }

  :global(#carbonads .carbon-img img) {
    display: block;
    max-width: 130px;
    border-radius: 4px;
  }

  :global(#carbonads .carbon-text) {
    font-size: 13px;
    padding: 10px;
    margin-bottom: 16px;
    line-height: 1.5;
    text-align: left;
  }

  :global(#carbonads .carbon-poweredby) {
    display: block;
    padding: 6px 8px;
    background: hsl(0, 0%, 93%);
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: 600;
    font-size: 8px;
    line-height: 1;
    border-top-left-radius: 3px;
    position: absolute;
    bottom: 0;
    right: 0;
  }

  :global(.dark #carbonads .carbon-poweredby) {
    background: hsl(0, 0%, 20%);
  }
</style>
