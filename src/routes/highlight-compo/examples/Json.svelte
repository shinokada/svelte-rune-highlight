<script lang="ts">
  import { HighlightCompo } from 'svelte-rune-highlight';
  import jsonCode from '../../examples/jsonCode.json?raw';
</script>

<HighlightCompo code={jsonCode} lang="json" showCopy={false} />
