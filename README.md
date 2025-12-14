# Svelte Rune Highlight

[![CI](https://github.com/shinokada/svelte-rune-highlight/actions/workflows/ci.yml/badge.svg)](https://github.com/shinokada/svelte-rune-highlight/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/svelte-rune-highlight.svg)](https://www.npmjs.com/package/svelte-rune-highlight)
[![License](https://img.shields.io/npm/l/svelte-rune-highlight.svg)](https://github.com/shinokada/svelte-rune-highlight/blob/main/LICENSE)

[DEMO](https://svelte-rune-highlight.codewithshin.com/)

Syntax highlighting for Svelte using [highlight.js](https://github.com/highlightjs/highlight.js).
This lib is ported from [Svelte-Highlight](https://www.npmjs.com/package/svelte-highlight).

> **📦 v2.0 Breaking Changes**  
> Tailwind CSS classes have been removed from library components. The library is now completely CSS framework-agnostic.  
> See [MIGRATION.md](./MIGRATION.md) for upgrade instructions.

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

## HighlightCompo Component

[HighlightCompo Component](https://svelte-rune-highlight.codewithshin.com/highlight-compo)

## Wrappers

[Wrappers](https://svelte-rune-highlight.codewithshin.com/wrappers)

## Theme Selector

[Theme Selector](https://svelte-rune-highlight.codewithshin.com/theme-selector)

## Development

### Testing

We use Vitest for unit testing and Playwright for E2E testing.

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage

# Open test UI
pnpm test:ui
```

See [TESTING.md](./TESTING.md) for detailed testing guide.

### Contributing

Contributions are welcome! Please ensure:
1. All tests pass: `pnpm test`
2. Code is formatted: `pnpm format`
3. No linting errors: `pnpm lint`
4. Types check: `pnpm check`

## Credit

[Svelte-Highlight](https://www.npmjs.com/package/svelte-highlight)
