# Quick Reference: Styling After v2.0

## The Essentials

All Tailwind classes removed from library. Choose your approach:

### Option 1: CSS (Copy to your global stylesheet)

```css
/* Minimal styling to get started */
.hlc-base {
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem;
  background-color: #1e293b;
}

.cw-base {
  margin-bottom: 2rem;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
}

.cw-inner {
  padding: 1.5rem;
  background-color: #f9fafb;
}
```

### Option 2: Tailwind (Pass classes as props)

```svelte
<!-- HighlightCompo -->
<HighlightCompo 
  code={myCode}
  class="rounded-lg overflow-hidden bg-slate-800"
/>

<!-- ExampleWrapper -->
<ExampleWrapper
  component={MyComponent}
  code={sourceCode}
  class="mb-8 rounded-lg border border-gray-200"
  innerClass="p-6 bg-gray-50"
  codeClass="border-t border-gray-600"
/>
```

## All Available Class Props

| Component | Prop | Description |
|-----------|------|-------------|
| `HighlightCompo` | `class` | Main container |
| `HighlightCompo` | `contentClass` | Content wrapper |
| `ExampleWrapper` | `class` | Main wrapper |
| `ExampleWrapper` | `innerClass` | Component area |
| `ExampleWrapper` | `codeClass` | Code area |

## Quick Links

- Full migration guide: [MIGRATION.md](./MIGRATION.md)
- Complete styling docs: [STYLING.md](./STYLING.md)
- Live examples: [svelte-rune-highlight.codewithshin.com](https://svelte-rune-highlight.codewithshin.com/styling)
