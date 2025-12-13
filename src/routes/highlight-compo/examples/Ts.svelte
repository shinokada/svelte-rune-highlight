<script lang="ts">
  import { HighlightCompo } from 'svelte-rune-highlight';
  import tsCode from '../../examples/tsCode.ts?raw';
</script>

<HighlightCompo code={tsCode} lang="ts" showCopy={false} />
