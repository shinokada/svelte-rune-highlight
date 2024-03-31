<script lang="ts">
  import HighlightCompo from '../utils/HighlightCompo.svelte';
  const modules = import.meta.glob('./md/**/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>
<h1>Code Block Swicher</h1>

<p>Use the <code>CodeBlockSwitcher</code> component to switch between code block styles.</p>


<HighlightCompo code={modules['./md/usage.md'] as string} />

