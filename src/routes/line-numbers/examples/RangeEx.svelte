<script lang="ts">
  import { HighlightSvelte } from 'svelte-rune-highlight';
  const examples = import.meta.glob('./*.*', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<HighlightSvelte
  code={examples['./sample-1.md'] as string}
  numberLine
  highlightedRanges={[
    [12, 14],
    [7, 9]
  ]}
  highlightedLines={[1, 3]}
  --highlighted-background="#3669f7"
/>
