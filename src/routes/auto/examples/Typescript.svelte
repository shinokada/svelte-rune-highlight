<script lang="ts">
  import { HighlightAuto } from 'svelte-rune-highlight';
  const examples = import.meta.glob('../../examples/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<HighlightAuto code={examples['../../examples/ts.md'] as string} />
