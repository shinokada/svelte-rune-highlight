<script lang="ts">
  import { Highlight } from 'svelte-rune-highlight';
  import yaml from 'svelte-rune-highlight/languages/yaml';
  const modules = import.meta.glob('./samples/*.md', { query: '?raw', import: 'default', eager: true });
</script>

<Highlight language={yaml} code={modules['./samples/yaml.md'] as string} langtag --langtag-color="lightcoral" />
