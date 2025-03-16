<script lang="ts">
  import { Highlight } from 'svelte-rune-highlight';
  import markdown from 'svelte-rune-highlight/languages/markdown';
  const modules = import.meta.glob('./samples/*.md', { query: '?raw', import: 'default', eager: true });
</script>

<Highlight language={markdown} code={modules['./samples/markdown.md'] as string} langtag --langtag-color="lightgreen" />
