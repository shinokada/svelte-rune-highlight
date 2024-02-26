<script>
  import '../app.pcss';
  import MetaTag from './utils/MetaTag.svelte';
  import { Darkmode } from 'svelte-5-ui-lib';
  let { children } = $props();
  const btnclass = 'absolute top-4 right-4';
</script>

<Darkmode {btnclass} />
<MetaTag />
<div class="mx-auto min-w-0 max-w-5xl flex-auto p-8 pb-20 md:static md:max-h-full md:overflow-visible">
  {@render children()}
</div>
