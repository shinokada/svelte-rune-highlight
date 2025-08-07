<script lang="ts">
  import { Highlight } from 'svelte-rune-highlight';
  import json from 'highlight.js/lib/languages/json';
  const modules = import.meta.glob('./samples/*.md', { query: '?raw', import: 'default', eager: true });
</script>

<Highlight language={json} code={modules['./samples/json.md'] as string} langtag --langtag-color="springgreen" />
