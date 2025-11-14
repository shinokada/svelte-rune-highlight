<script lang="ts">
  import { HighlightSvelte } from '$lib';
  const examples = import.meta.glob('./*.svelte', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<HighlightSvelte code={examples['./Numberline.svelte'] as string} numberLine highlightedLines={[3, 7]} --highlighted-background="#be46d4"/>