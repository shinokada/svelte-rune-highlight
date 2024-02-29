<script lang="ts">
  import '../app.pcss';
  import './utils/themes.css';
  import MetaTag from './utils/MetaTag.svelte';
  import Nav from './utils/Nav.svelte';
  let { children } = $props();
  
</script>


<MetaTag />
<Nav />
<div class="mx-auto min-w-0 max-w-5xl flex-auto p-8 pb-20 md:static md:max-h-full md:overflow-visible">
  {@render children()}
</div>
