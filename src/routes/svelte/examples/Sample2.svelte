<script lang="ts">
  import { HighlightSvelte } from 'svelte-rune-highlight';
  const exampleModules = import.meta.glob('./*.*', {
    query: '?raw',
    import: 'default',
    eager: true
  }) as Record<string, string>;
</script>

<HighlightSvelte code={exampleModules['./sample-2.md'] as string} langtag --langtag-color="green" />
