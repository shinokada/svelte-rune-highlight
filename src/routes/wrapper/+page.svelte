<script lang="ts">
  import { Highlight } from '$lib';
  import HighlightCompo from '../utils/HighlightCompo.svelte';
  // import typescript from '$lib/languages/typescript';
  // import "$lib/styles/github-dark.css";
  // import "$lib/styles/github.css";
  const modules = import.meta.glob('./md/*.md', { query: '?raw', import: 'default', eager: true });
  const code = 'const add = (a: number, b: number) => a + b;\nconsole.log(a);\nconsole.log(b);';
  
</script>

<h1>Wrapper</h1>

<p>The following is an example of how to create a custom wrapper for your svelte file:</p>

<HighlightCompo code={modules['./md/wrapper.md'] as string} />

<p>Create a md directory and add some markdown files. Then in your svelte file:</p>

<HighlightCompo code={modules['./md/usage.md'] as string} />
