<script lang="ts">
  import { HighlightCompo } from 'svelte-rune-highlight'
  const modules = import.meta.glob('./md/*.md', { query: '?raw', import: 'default', eager: true });
</script>

<HighlightCompo code={modules['./md/setup.md'] as string} class="max-w-5xl" />
