<script lang="ts">
  import '../app.pcss';
  // import './utils/themes.css';// use this for method 2 to change code style dynamically
  import MetaTag from './utils/MetaTag.svelte';
  import Nav from './utils/Nav.svelte';
  import Footer from './utils/Footer.svelte';
  let { children } = $props();
</script>

<MetaTag />
<Nav />
<div
  class="mx-auto min-w-0 max-w-5xl flex-auto p-8 pb-20 md:static md:max-h-full md:overflow-visible"
>
  {@render children()}
</div>
<Footer />
