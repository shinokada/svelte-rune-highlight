<script lang="ts">
  import { Highlight } from 'svelte-rune-highlight';
  import typescript from 'svelte-rune-highlight/languages/typescript';
  const modules = import.meta.glob('./samples/*.md', { query: '?raw', import: 'default', eager: true });
</script>

<Highlight language={typescript} code={modules['./samples/javascript.md'] as string} />
