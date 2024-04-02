<script lang="ts">
  import { Highlight } from '$lib';
  import HighlightCompo from '../utils/HighlightCompo.svelte';
  // import typescript from '$lib/languages/typescript';
  // import "$lib/styles/github-dark.css";
  // import "$lib/styles/github.css";
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
  const code =
    'const add = (a: number, b: number) => a + b;\nconsole.log(a);\nconsole.log(b);';
</script>

<h1>Extend</h1>

<h2>Code Block Switcher</h2>


<p>Use the <code>CodeBlockSwitcher</code> example to switch between code block styles.
  Add <code>styles</code> directory where you use this component.
  </p>
  
  <HighlightCompo code={modules['./md/block-switch.md'] as string} />
  
  <h2>Usage</h2>
  
  <HighlightCompo code={modules['./md/switch-usage.md'] as string} />

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
