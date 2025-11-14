<script lang="ts">
  import { HighlightSvelte } from 'svelte-rune-highlight';
  const examples = import.meta.glob('./*.svelte', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<HighlightSvelte code={examples['./Numberline.svelte'] as string} numberLine highlightedRanges={[[2, 4], [10, 12]]} highlightedLines={[7]} --highlighted-background="#be46d4"/>