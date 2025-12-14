# Migration Guide: v1.x to v2.0

## Breaking Changes

### Tailwind CSS Classes Removed from Library Components

**What Changed:**
- All Tailwind CSS utility classes have been removed from `src/lib` components
- The library is now CSS framework-agnostic
- `contentClass` default value changed from `'overflow-hidden'` to `''`

**Why:**
- Reduces bundle size for non-Tailwind users
- Prevents style conflicts and specificity issues
- Gives you full control over styling
- Makes the library framework-agnostic

## Migration Strategies

You have two options to restore the previous styling:

### Option 1: Using Custom CSS (Recommended for most users)

Add these styles to your global CSS file:

```css
/* app.css or global.css */

/* HighlightCompo base styles */
.hlc-base {
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem;
  background-color: #1e293b;
}

/* ExampleWrapper styles */
.cw-base {
  margin-bottom: 2rem;
  overflow: hidden;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  background-color: #ffffff;
}

.cw-inner {
  padding: 1.5rem;
  background-color: #f9fafb;
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .cw-base {
    border-color: #374151;
    background-color: #1f2937;
  }
  
  .cw-inner {
    background-color: #111827;
  }
}

/* Copy button styles */
.hlc-copy-button {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem;
  border-radius: 0.375rem;
  background-color: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.2);
  cursor: pointer;
  transition: all 0.2s;
}

.hlc-copy-button:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.hlc-copy-success {
  background-color: rgba(34, 197, 94, 0.2);
  border-color: #22c55e;
  color: #22c55e;
}

.hlc-copy-error {
  background-color: rgba(239, 68, 68, 0.2);
  border-color: #ef4444;
  color: #ef4444;
}

/* Expand button styles */
.hlc-expand-button {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.5rem;
  text-align: center;
  font-size: 0.875rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  color: #ffffff;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s;
}

.hlc-expand-button:hover {
  opacity: 0.9;
}

/* Warning and error messages */
.hlc-warning {
  padding: 1rem;
  background-color: #fef3c7;
  border: 1px solid #fbbf24;
  border-radius: 0.375rem;
  color: #92400e;
}

.hlc-error {
  padding: 1rem;
  background-color: #fee2e2;
  border: 1px solid #ef4444;
  border-radius: 0.375rem;
  color: #991b1b;
}

@media (prefers-color-scheme: dark) {
  .hlc-warning {
    background-color: #451a03;
    border-color: #92400e;
    color: #fef3c7;
  }
  
  .hlc-error {
    background-color: #450a0a;
    border-color: #991b1b;
    color: #fee2e2;
  }
}
```

### Option 2: Using Tailwind CSS (For Tailwind users)

If you're using Tailwind CSS in your project, you can pass utility classes directly to components:

#### Before (v1.x):
```svelte
<HighlightCompo code={myCode} lang="javascript" />
```

#### After (v2.0):
```svelte
<HighlightCompo 
  code={myCode} 
  lang="javascript"
  class="rounded-lg overflow-hidden bg-slate-800"
/>

<ExampleWrapper
  component={MyComponent}
  code={sourceCode}
  class="mb-8 rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800"
  innerClass="p-6 bg-gray-50 dark:bg-gray-900"
/>
```

#### Create Tailwind Component Classes:

For consistency across your app, define reusable classes:

```css
/* app.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  /* HighlightCompo default styling */
  .code-block {
    @apply relative overflow-hidden rounded-lg bg-slate-800;
  }
  
  .code-block-light {
    @apply relative overflow-hidden rounded-lg border border-gray-200 bg-white;
  }
  
  /* ExampleWrapper default styling */
  .example-wrapper {
    @apply mb-8 overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800;
  }
  
  .example-inner {
    @apply p-6 bg-gray-50 dark:bg-gray-900;
  }
  
  /* Code section styling */
  .example-code {
    @apply border-t border-gray-600;
  }
}
```

Then use in your components:

```svelte
<HighlightCompo 
  code={myCode} 
  lang="javascript"
  class="code-block"
/>

<ExampleWrapper
  component={MyComponent}
  code={sourceCode}
  class="example-wrapper"
  innerClass="example-inner"
  codeClass="example-code"
/>
```

## Component-Specific Changes

### HighlightCompo

#### Props That Accept Classes:
- `class` - Main container styling
- `contentClass` - Content area styling (default changed from `'overflow-hidden'` to `''`)

#### Example Migration:

**Before (v1.x):**
```svelte
<HighlightCompo code={myCode} lang="javascript" />
<!-- Had built-in Tailwind classes -->
```

**After (v2.0) - CSS:**
```svelte
<HighlightCompo code={myCode} lang="javascript" />
<!-- Add CSS rules to .hlc-base in your stylesheet -->
```

**After (v2.0) - Tailwind:**
```svelte
<HighlightCompo 
  code={myCode} 
  lang="javascript"
  class="rounded-lg overflow-hidden bg-slate-800"
/>
```

### ExampleWrapper

#### Props That Accept Classes:
- `class` - Main wrapper container
- `innerClass` - Inner content area (where component renders)
- `codeClass` - Code display area

#### Example Migration:

**Before (v1.x):**
```svelte
<ExampleWrapper component={MyComponent} code={sourceCode} />
<!-- Had built-in Tailwind classes -->
```

**After (v2.0) - CSS:**
```svelte
<ExampleWrapper component={MyComponent} code={sourceCode} />
<!-- Add CSS rules to .cw-base and .cw-inner in your stylesheet -->
```

**After (v2.0) - Tailwind:**
```svelte
<ExampleWrapper 
  component={MyComponent} 
  code={sourceCode}
  class="mb-8 rounded-lg border border-gray-200 dark:border-gray-700"
  innerClass="p-6 bg-gray-50 dark:bg-gray-900"
  codeClass="border-t border-gray-600"
/>
```

## Quick Migration Checklist

- [ ] Choose your approach: Custom CSS or Tailwind utilities
- [ ] If using CSS: Copy the CSS snippets to your global stylesheet
- [ ] If using Tailwind: Update components with `class`, `innerClass`, `codeClass` props
- [ ] Test dark mode styling if you use it
- [ ] Update any custom styling that relied on Tailwind classes
- [ ] Review the [STYLING.md](./STYLING.md) guide for advanced customization

## Benefits of v2.0

✅ **Smaller bundle size** - No Tailwind CSS in the library  
✅ **Framework agnostic** - Works with any CSS approach  
✅ **Full control** - Style exactly how you want  
✅ **No conflicts** - Your Tailwind config won't affect library internals  
✅ **Better tree-shaking** - Only includes what you use  

## Need Help?

- Read the full [Styling Guide](./STYLING.md)
- Check out [examples in the documentation](https://svelte-rune-highlight.codewithshin.com/styling)
- Open an issue on [GitHub](https://github.com/shinokada/svelte-rune-highlight/issues)

## Version Support

- **v1.x** - Last version with built-in Tailwind classes (maintenance only)
- **v2.0+** - CSS framework-agnostic (recommended for all new projects)
