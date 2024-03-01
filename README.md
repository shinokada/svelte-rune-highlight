# Svelte Rune Highlight

[DEMO](https://svelte-rune-highlight.codewithshin.com/)

Syntax highlighting for Svelte using [highlight.js](https://github.com/highlightjs/highlight.js).
This lib is ported from [Svelte-Highlight](https://www.npmjs.com/package/svelte-highlight).

## Installation

```
pnpm i -D svelte-rune-highlight
```

## Usage

You may want to create a wrapper:

```
// utils/HighlightCompo.svelte
<script lang="ts">
  import { HighlightSvelte, Highlight } from '$lib';
  // check colorscheme at https://highlightjs.org/demo
  import githubDark from '$lib/styles/github-dark';
  import markdown from '$lib/languages/markdown';
  let { code, codeLang } = $props<{ code: string; codeLang?: string }>();
</script>

<svelte:head>
  {@html githubDark}
</svelte:head>

<div class="mx-auto my-8 max-w-4xl rounded-md border border-gray-200 bg-gray-50 p-0.5 dark:border-gray-600 dark:bg-gray-700">
  {#if codeLang === 'md'}
    <Highlight language={markdown} {code} />
  {:else if code}
    <HighlightSvelte {code} />
  {:else}
    no code is provided
  {/if}
</div>
```

Create a md directory and add some markdown files. Then in your svelte file:

```
<script lang="ts">
  import HighlightCompo from '../utils/HighlightCompo.svelte';
  const modules = import.meta.glob('./md/*.md', { query: '?raw', import: 'default', eager: true });
</script>

<HighlightCompo code={modules['./md/setup.md'] as string} />
```

Read more usage at [Svelte-Highlight](https://www.npmjs.com/package/svelte-highlight).
