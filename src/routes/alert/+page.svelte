<script lang="ts">
  import HighlightCompo from '../utils/HighlightCompo.svelte';
  // import classicdark from 'svelte-highlight/styles/classic-dark';
  const modules = import.meta.glob('./md/*.md', { query: '?raw', import: 'default', eager: true });

</script>

<HighlightCompo code={modules['./md/setup.md'] as string} />


