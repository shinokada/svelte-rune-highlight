<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';

  const fathomSiteId = import.meta.env.PUBLIC_FATHOM_SITE_ID;

  onMount(() => {
    if (!browser || !fathomSiteId) return;

    // Load Fathom Analytics script
    const script = document.createElement('script');
    script.src = 'https://cdn.usefathom.com/script.js';
    script.setAttribute('data-site', fathomSiteId);
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup on unmount
      script.remove();
    };
  });
</script>

<!-- Fathom Analytics is loaded via script injection -->
