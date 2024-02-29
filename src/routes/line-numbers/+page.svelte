<script lang="ts">
  import { Highlight } from '$lib';
  import typescript from '$lib/languages/typescript';
  const modules = import.meta.glob('./samples/*.svelte', { query: '?raw', import: 'default', eager: true });
</script>

<h1>Line Numbers</h1>

The Highlight component has the option to add line numbers. See the following examples.

<h2>Number Lines</h2>
<Highlight language={typescript} code={modules['./samples/sample-1.svelte'] as string} numberLine />

<h2>Hide Border</h2>
<Highlight language={typescript} code={modules['./samples/sample-2.svelte'] as string} hideBorder numberLine />

<h2>Wraped Lines</h2>
<Highlight language={typescript} code={modules['./samples/sample-3.svelte'] as string} wrapLines numberLine />

<h2>Starting Line Number</h2>
<Highlight language={typescript} code={modules['./samples/sample-4.svelte'] as string} startingLineNumber={42} numberLine />

<h2>Highlighted Lines and Highlighted Background</h2>
<Highlight language={typescript} code={modules['./samples/sample-5.svelte'] as string} highlightedLines={[2, 4]} --highlighted-background="#666" numberLine />

<h2>Custom styles</h2>
<Highlight language={typescript} code={modules['./samples/sample-6.svelte'] as string} highlightedLines={[1, 3]} --line-number-color="pink" --border-color="rgba(25, 155, 55, 1)" --padding-left="1em" --padding-right="2em" --highlighted-background="#6e6e6e" numberLine />
