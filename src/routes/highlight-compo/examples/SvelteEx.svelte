<script lang="ts">
  import { HighlightCompo } from "$lib";
  import svelteCode from './svelteCode.svelte?raw';
</script>

<HighlightCompo code={svelteCode} showCopy={false}/>