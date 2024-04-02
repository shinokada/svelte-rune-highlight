<script lang="ts">
  import HighlightCompo from '../utils/HighlightCompo.svelte';
  const modules = import.meta.glob('./md/**/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>
<h1>Code Block Swicher</h1>

<p>Use the <code>CodeBlockSwitcher</code> example to switch between code block styles.
Add <code>styles</code> directory where you use this component.
</p>

<HighlightCompo code={modules['./md/block-switch.md'] as string} />

<h2>Usage</h2>

<HighlightCompo code={modules['./md/switch-usage.md'] as string} />

