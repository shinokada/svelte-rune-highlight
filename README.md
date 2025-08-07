# Svelte Rune Highlight

[DEMO](https://svelte-rune-highlight.codewithshin.com/)

Syntax highlighting for Svelte using [highlight.js](https://github.com/highlightjs/highlight.js).
This lib is ported from [Svelte-Highlight](https://www.npmjs.com/package/svelte-highlight).

## Installation

```
pnpm i -D svelte-rune-highlight highlight.js

// +layout.svelte
<script lang="ts">
  // select your faviroite scheme from https://highlightjs.org/demo
  import githubDark from 'svelte-rune-highlight/styles/github-dark';
  let { children } = $props();
</script>

<svelte:head>
  {@html githubDark}
</svelte:head>

{@render children?.()}
```

## Docs

[Docs](https://svelte-rune-highlight.codewithshin.com/)

## Highlight component

[Highlight](https://svelte-rune-highlight.codewithshin.com/highlight)

## HighlightAuto component

[HighlightAuto](https://svelte-rune-highlight.codewithshin.com/auto)

## HighlightSvelte component

[HighlightSvelte](https://svelte-rune-highlight.codewithshin.com/svelte)

## Line numbers

[Line numbers](https://svelte-rune-highlight.codewithshin.com/line-numbers)

## Credit

[Svelte-Highlight](https://www.npmjs.com/package/svelte-highlight)
