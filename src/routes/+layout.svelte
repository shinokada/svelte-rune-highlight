<script lang="ts">
  import '../app.pcss';
  import { Runatics } from 'runatics';
  import Nav from './utils/Nav.svelte';
  import Footer from './utils/Footer.svelte';
  let { children, data } = $props();
  const analyticsId = data.ANALYTICS_ID
</script>
<Runatics {analyticsId} />

<Nav />
<div
  class="mx-auto min-w-0 max-w-5xl flex-auto p-8 pb-20 md:static md:max-h-full md:overflow-visible"
>
  {@render children()}
</div>
<Footer />
