<script lang="ts">
  import { HighlightAuto } from 'svelte-rune-highlight';
  const examples = import.meta.glob('../../examples/*.*', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<HighlightAuto code={examples['../../examples/js.md'] as string} />
