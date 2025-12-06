# Fixes for CSS and State Reference Warnings

## Issues Found

After the refactoring, two issues were identified:

1. **Missing padding/styles in line numbers** - All CSS in `HighlightTable.svelte` was marked as "unused"
2. **State reference warnings** - Accessing `language` prop outside reactive context in `Highlight.svelte`

---

## Fix 1: CSS Scoping Issue in HighlightTable.svelte

### The Problem

Svelte's default CSS scoping only applies styles to elements *directly in the component*. When we extracted the table into `LineNumberTable.svelte`, the styles in `HighlightTable.svelte` no longer applied because they were targeting child component elements.

**Before (not working):**
```css
.highlight-table td {
  padding-left: var(--padding-left, 1em);
  padding-right: var(--padding-right, 1em);
}
```

This style didn't apply because `<td>` elements are rendered by `LineNumberTable.svelte`, not by `HighlightTable.svelte`.

### The Solution

Use `:global()` to style elements from child components:

```css
.highlight-table :global(td) {
  padding-left: var(--padding-left, 1em);
  padding-right: var(--padding-right, 1em);
}
```

**Why this works:**
- `.highlight-table` remains scoped (only applies to our component)
- `:global(td)` allows styling child component elements
- The combination `.highlight-table :global(td)` means "any `<td>` inside `.highlight-table`"

### All Styles Updated

Every selector targeting table elements now uses `:global()`:
- `.highlight-table :global(pre)`
- `.highlight-table :global(table)`
- `.highlight-table :global(tr)`
- `.highlight-table :global(td)`
- `.highlight-table :global(.wrapLines)`
- `.highlight-table :global(.line-background)`
- etc.

---

## Fix 2: State Reference Warning in Highlight.svelte

### The Problem

```typescript
// This code at module level creates a warning:
if (!hljs.getLanguage(language.name)) {
  hljs.registerLanguage(language.name, language.register);
}
```

**Warning:** "This reference only captures the initial value of `language`. Did you mean to reference it inside a closure instead?"

### Why This Happens

In Svelte 5, props are reactive by default. When you access them outside a reactive context (like at module level), Svelte warns you that you're only getting the initial value, not tracking changes.

### The Solution

Wrap non-reactive access in `untrack()`:

```typescript
import { untrack } from 'svelte';

// Tell Svelte we intentionally want just the initial value
untrack(() => {
  if (!hljs.getLanguage(language.name)) {
    hljs.registerLanguage(language.name, language.register);
  }
});
```

**Why this works:**
- `untrack()` tells Svelte "I know this is a prop, but I intentionally want just the initial value"
- For SSR, we only need to register once with the initial language
- The `$effect()` handles any dynamic language changes on the client

### Alternative Approaches Considered

1. **Move everything inside `$effect()`** - Doesn't work for SSR (effects don't run on server)
2. **Use a function** - More complex, harder to read
3. **Accept the warning** - Bad practice, clutters logs

---

## Testing the Fixes

### Before Fixes:
- ❌ 24 CSS unused selector warnings
- ❌ 3 state reference warnings  
- ❌ Line number padding missing
- ✅ All e2e tests pass (functionality worked, just styling was broken)

### After Fixes:
- ✅ 0 CSS warnings
- ✅ 0 state reference warnings
- ✅ Line number padding restored
- ✅ All e2e tests pass

---

## Key Learnings

### 1. CSS Scoping with Child Components

When extracting components, be aware of CSS scoping:

**Pattern 1: Parent styles child directly (BAD)**
```svelte
<!-- Parent.svelte -->
<style>
  .parent td { /* Won't work! */ }
</style>
<div class="parent">
  <Child />
</div>
```

**Pattern 2: Use :global() (GOOD)**
```svelte
<!-- Parent.svelte -->
<style>
  .parent :global(td) { /* Works! */ }
</style>
<div class="parent">
  <Child />
</div>
```

**Pattern 3: Props for styles (BEST for reusable components)**
```svelte
<!-- Parent.svelte -->
<Child tdClass="custom-td" />

<!-- Child.svelte -->
<td class={tdClass}>...</td>
```

### 2. Prop Access in Svelte 5

**Reactive contexts (automatically tracked):**
- Inside `$derived`
- Inside `$effect`
- In template (markup)

**Non-reactive contexts (need `untrack()` if intentional):**
- Module level
- Regular functions
- Constructors

### 3. SSR Considerations

Remember that in SvelteKit:
- Module-level code runs during SSR
- `$effect()` only runs on client
- Use `untrack()` for SSR-only initialization with props

---

## Updated Component Architecture

```
HighlightTable.svelte (wrapper with :global() styles)
  └─> LineNumberTable.svelte (renders table rows)
       └─> Renders <table>, <tr>, <td> elements
```

The `:global()` styles in `HighlightTable.svelte` now correctly apply to elements rendered by `LineNumberTable.svelte`.

---

## Checklist for Future Component Extraction

When extracting child components:

- [ ] Check if parent has CSS targeting child elements
- [ ] Update CSS selectors to use `:global()` where needed
- [ ] Test that all styles still apply
- [ ] Run `pnpm check` to verify no CSS warnings
- [ ] For props accessed at module level, wrap in `untrack()` if intentional
- [ ] Test SSR behavior (build and preview)
- [ ] Document any `:global()` usage with comments
