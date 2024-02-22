<script lang="ts">
  import HighlightCompo from './utils/HighlightCompo.svelte';
  // import classicdark from 'svelte-highlight/styles/classic-dark';
  const modules = import.meta.glob('./md/*.md', { query: '?raw', import: 'default', eager: true });

</script>

<HighlightCompo code={modules['./md/setup.md'] as string} />

<HighlightCompo code={modules['./md/default-sidebar.md'] as string} />

<HighlightCompo code={modules['./md/using-object.md'] as string} />

<HighlightCompo code={modules['./md/adding-active-class.md'] as string} />

<HighlightCompo code={modules['./md/multi-level-dropdown.md'] as string} />

<HighlightCompo code={modules['./md/content-separator.md'] as string} />
