<script lang="ts">
  import { HighlightSvelte } from '$lib';
  import HighlightCompo from '../utils/HighlightCompo.svelte';
  const modules = import.meta.glob('./samples/*.{svelte,md}', { query: '?raw', import: 'default', eager: true });

  const code = 'const add = (a: number, b: number) => a + b;';
  const code2 = `<button on:click={() => { console.log(0); }}>Increment {count}</button>`;
  const code3 = `body {\n  padding: 0;\n  color: red;\n}`;
</script>

<h1>HighlightSvelte Component</h1>

Use the HighlightSvelte component to highlight your Svelte code.

<h2>Example 1</h2>
<HighlightSvelte code={modules['./samples/sample-1.svelte'] as string} langtag --langtag-color="aqua" />

<h2>Example 2</h2>

<HighlightSvelte code={modules['./samples/sample-2.svelte'] as string} langtag --langtag-color="lavender" />

<h2>Props</h2>

<HighlightCompo code={modules['./samples/props.md'] as string} />
