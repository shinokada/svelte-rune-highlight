# Svelte Rune Highlight

[DEMO](https://svelte-rune-highlight.codewithshin.com/)

Syntax highlighting for Svelte using [highlight.js](https://github.com/highlightjs/highlight.js).
This lib is ported from [Svelte-Highlight](https://www.npmjs.com/package/svelte-highlight).

## Installation

Install Svelte 5 and enable runes in svelte.config.js:

```
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [vitePreprocess({})],
  compilerOptions: {
    runes: true
  },
  kit: {
    adapters.
    adapter: adapter()
  }
};

export default config;
```

Install `svelte-rune-highlight`:

```
pnpm i -D svelte-rune-highlight highlight.js
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

## Custom wrapper

[Custom wrapper](https://svelte-rune-highlight.codewithshin.com/wrapper)

## Credit

[Svelte-Highlight](https://www.npmjs.com/package/svelte-highlight)
