# Svelte Rune Highlight

[DEMO](https://svelte-rune-highlight.codewithshin.com/)

Syntax highlighting for Svelte using [highlight.js](https://github.com/highlightjs/highlight.js).
This lib is ported from [Svelte-Highlight](https://www.npmjs.com/package/svelte-highlight).

## Installation

```sh
pnpm i -D svelte-rune-highlight highlight.js
```

Then in +layout.svelte

```svelte
<script lang="ts">
	// select your faviroite scheme from https://highlightjs.org/demo
	import 'highlight.js/styles/github-dark.css';
</script>
```

or use directly from cdnjs

```svelte
<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/styles/dark.min.css"
	/>
</svelte:head>
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
