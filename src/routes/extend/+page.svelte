<script lang="ts">
  import HighlightCompo from '../utils/HighlightCompo.svelte';
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<h1>Extend</h1>

<h2>Wrapper example</h2>

<p>
  The following is an example of how to create a custom wrapper for your svelte
  file:
</p>

<HighlightCompo code={modules['./md/wrapper.md'] as string} />

<p>
  Create a md directory and add some markdown files. Then in your svelte file:
</p>

<HighlightCompo code={modules['./md/usage.md'] as string} />
