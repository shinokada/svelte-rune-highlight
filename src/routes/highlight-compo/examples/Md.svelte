<script lang="ts">
  import { HighlightCompo } from 'svelte-rune-highlight';
  import mdCode from '../../examples/mdCode.md?raw';
</script>

<HighlightCompo code={mdCode} lang="md" showCopy={false} />
