# Styling Guide for svelte-rune-highlight

svelte-rune-highlight is a CSS framework-free library that can be customized using CSS custom properties, custom classes, or Tailwind CSS utilities.

> **📦 v2.0 Breaking Changes:** Tailwind CSS classes have been removed from library components. See [MIGRATION.md](./MIGRATION.md) for upgrade instructions.

## Table of Contents

- [CSS Custom Properties](#css-custom-properties)
- [Custom Classes](#custom-classes)
- [Tailwind CSS](#tailwind-css)
- [Highlight.js Themes](#highlightjs-themes)
- [Built-in CSS Classes](#built-in-css-classes)
- [Combining Methods](#combining-methods)
- [Examples](#examples)

## CSS Custom Properties

The recommended way to customize components globally. Add these to your global stylesheet:

```css
:root {
  /* Code block styling */
  --code-padding: 1.5rem;
  --code-font-family: 'JetBrains Mono', 'Fira Code', monospace;
  --code-font-size: 0.9375rem;
  --code-line-height: 1.6;

  /* Language tag */
  --langtag-background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --langtag-color: white;
  --langtag-padding: 0.5rem 1rem;
  --langtag-border-radius: 0.5rem;
  --langtag-top: 0.5rem;
  --langtag-right: 0.5rem;
  --langtag-font-size: 0.75rem;
  --langtag-font-family: monospace;
  --langtag-text-transform: uppercase;
  --langtag-letter-spacing: 0.025em;
  --langtag-z-index: 1;
  
  /* Highlighted lines */
  --highlighted-background: rgba(102, 126, 234, 0.2);
  
  /* Line numbers */
  --line-number-color: #6b7280;
  
  /* Borders and spacing */
  --border-color: #e5e7eb;
  --padding-left: 1em;
  --padding-right: 1em;
}
```

### Available CSS Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `--code-padding` | `1rem` | Padding inside code blocks |
| `--code-font-family` | `'Fira Code', monospace` | Font family for code |
| `--code-font-size` | `0.875rem` | Font size for code text |
| `--code-line-height` | `1.5` | Line height for code |
| `--langtag-background` | `rgba(0, 0, 0, 0.1)` | Language tag background |
| `--langtag-color` | `currentColor` | Language tag text color |
| `--langtag-padding` | `0.25rem 0.5rem` | Language tag padding |
| `--langtag-border-radius` | `4px` | Language tag border radius |
| `--langtag-top` | `0.5rem` | Language tag top position |
| `--langtag-right` | `0.5rem` | Language tag right position |
| `--langtag-font-size` | `0.75rem` | Language tag font size |
| `--langtag-font-family` | `monospace` | Language tag font family |
| `--langtag-text-transform` | `uppercase` | Language tag text transform |
| `--langtag-letter-spacing` | `0.025em` | Language tag letter spacing |
| `--langtag-z-index` | `1` | Language tag z-index |
| `--highlighted-background` | `rgba(254, 241, 96, 0.2)` | Highlighted line background |
| `--line-number-color` | `currentColor` | Line number color |
| `--border-color` | `currentColor` | Border between line numbers |
| `--padding-left` | `1em` | Table cell left padding |
| `--padding-right` | `1em` | Table cell right padding |

## Custom Classes

Pass custom classes to components for specific styling:

```svelte
<script>
  import { HighlightCompo } from 'svelte-rune-highlight';
</script>

<HighlightCompo 
  code={myCode} 
  lang="javascript"
  class="custom-code-block"
/>

<style>
  :global(.custom-code-block) {
    border: 2px solid #667eea;
    border-radius: 0.75rem;
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
  }
</style>
```

## Tailwind CSS

If your project uses Tailwind CSS, leverage its utility classes:

### Define Component Classes

```css
/* app.css or layout.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .code-block-modern {
    @apply rounded-xl border-2 border-blue-500 shadow-2xl;
  }
  
  .code-block-card {
    @apply rounded-lg bg-white dark:bg-gray-900 shadow-lg ring-1 ring-gray-200 dark:ring-gray-800;
  }
  
  .code-block-gradient {
    @apply rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 p-1;
  }
}
```

### Use Utilities Directly

```svelte
<HighlightCompo 
  code={myCode} 
  lang="javascript"
  class="rounded-xl border-2 border-blue-500 shadow-2xl"
/>
```

## Highlight.js Themes

Change syntax highlighting colors by importing different themes:

```javascript
import 'highlight.js/styles/github-dark.css';
// or
import 'highlight.js/styles/atom-one-dark.css';
// or
import 'highlight.js/styles/monokai.css';
```

Popular themes: `github-dark`, `atom-one-dark`, `monokai`, `nord`, `tokyo-night`

Browse all themes: [Highlight.js demo](https://highlightjs.org/demo)

## Built-in CSS Classes

Override these classes in your global stylesheet:

| Class Name | Used In | Purpose |
|------------|---------|---------|
| `.hlc-base` | HighlightCompo | Base container styling |
| `.hlc-warning` | All components | Warning messages in DEV mode |
| `.hlc-error` | HighlightSvelte | Error messages |
| `.hlc-empty-code` | HighlightSvelte | Empty code message |
| `.cw-base` | ExampleWrapper | Wrapper container |
| `.cw-inner` | ExampleWrapper | Inner content area |

Example override:

```css
.hlc-base {
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.hlc-error {
  border: 2px solid #dc2626;
  background-color: #fee2e2;
}
```

## Combining Methods

For maximum flexibility, combine different approaches:

```css
/* layout.css - Set global CSS variables */
:root {
  --code-font-family: 'JetBrains Mono', monospace;
  --code-font-size: 0.9375rem;
  --langtag-padding: 0.5rem 1rem;
}

/* layout.css - Define Tailwind component classes */
@layer components {
  .code-premium {
    @apply rounded-xl shadow-2xl ring-2 ring-blue-500/50;
  }
}
```

```svelte
<!-- Component.svelte -->
<script>
  import { HighlightCompo } from 'svelte-rune-highlight';
  import 'highlight.js/styles/github-dark.css';
</script>

<div style="--code-padding: 2rem;">
  <HighlightCompo 
    code={myCode} 
    lang="javascript"
    class="code-premium border-2 border-purple-500"
  />
</div>
```

This gives you:
- ✅ Global theme consistency via CSS variables
- ✅ Reusable Tailwind component classes
- ✅ Component-specific overrides with inline styles
- ✅ Beautiful syntax colors from highlight.js

## Examples

### Dark Theme with Neon Accent

```css
:root {
  --code-padding: 1.5rem;
  --code-font-family: 'JetBrains Mono', monospace;
  --langtag-background: #10b981;
  --langtag-color: #fff;
  --highlighted-background: rgba(16, 185, 129, 0.2);
}

.hlc-base {
  background: #1e293b;
  border: 1px solid #10b981;
  box-shadow: 0 0 20px rgba(16, 185, 129, 0.3);
}
```

### Minimal Light Theme

```css
:root {
  --code-padding: 1rem;
  --code-font-family: 'SF Mono', monospace;
  --langtag-background: transparent;
  --langtag-color: #64748b;
}

.hlc-base {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
}
```

### Retro Terminal

```css
:root {
  --code-font-family: 'Courier New', monospace;
  --langtag-background: #00ff00;
  --langtag-color: #000;
  --line-number-color: #00ff00;
}

.hlc-base {
  background: #000;
  color: #00ff00;
  border: 2px solid #00ff00;
  box-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
}
```

## When to Use Each Method

**CSS Custom Properties** - Best for:
- Global theming across entire site
- Dynamic theme switching
- Framework-agnostic projects
- Fine-tuned control over specific properties

**Tailwind CSS** - Best for:
- Quick prototyping and iteration
- Consistent spacing and sizing
- Responsive designs
- Modern effects (shadows, gradients, blur)

**Custom Classes** - Best for:
- Component-specific styling
- Complex animations
- Unique design requirements
- Reusable component patterns

**Highlight.js Themes** - Best for:
- Syntax highlighting colors
- Pre-made color schemes
- Matching IDE themes
- Quick theme changes

## CSS Classes Reference

The library includes several built-in CSS classes you can override:

| Class Name | Used In | Purpose |
|------------|---------|------|
| `.hlc-base` | HighlightCompo | Base container styling |
| `.hlc-warning` | All components | Warning messages in DEV mode |
| `.hlc-error` | HighlightSvelte | Error messages |
| `.hlc-error-hint` | HighlightSvelte | Error hint text |
| `.hlc-empty-code` | HighlightSvelte, HighlightCompo | Empty code message |
| `.hlc-copy-button` | HighlightCompo | Copy button base styles |
| `.hlc-copy-success` | HighlightCompo | Copy button success state |
| `.hlc-copy-error` | HighlightCompo | Copy button error state |
| `.hlc-copy-idle` | HighlightCompo | Copy button idle state |
| `.hlc-expand-button` | HighlightCompo | Expand/collapse button |
| `.hlc-no-code` | HighlightCompo | No code provided message |
| `.cw-base` | ExampleWrapper | Wrapper container |
| `.cw-inner` | ExampleWrapper | Inner content area |

Example override:

```css
.hlc-copy-button {
  border-radius: 1rem;
  padding: 0.5rem 1rem;
}

.hlc-expand-button {
  background: linear-gradient(to right, #667eea 0%, #764ba2 100%);
  color: white;
  font-weight: bold;
}
```

## Resources

- [GitHub Repository](https://github.com/shinokada/svelte-rune-highlight)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Highlight.js Themes](https://highlightjs.org/demo)
- [MDN: CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

## Live Demo

Visit the [styling page](/styling) in the documentation to see live examples of all these styling methods.
