<script lang="ts">
  import { HighlightSvelte } from 'svelte-rune-highlight';
  const examples = import.meta.glob('../../examples/*.svelte', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<HighlightSvelte code={examples['../../examples/Numberline.svelte'] as string} numberLine />
