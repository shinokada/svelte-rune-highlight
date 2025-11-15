<script lang="ts">
  import { HighlightCompo } from '$lib';
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<h1>Theme Selector</h1>

<p>Use the following example to create a code theme selector.</p>

<h2>CSS</h2>

<p>
  <a class="underline" href="https://github.com/shinokada/svelte-rune-highlight/tree/main/src/routes/utils/highlight">Copy this directory</a> to your `src/routes/utils` directory.
</p>

<h2>ThemeSelector</h2>

<p>Create src/routes/utils/ThemeSelector.svelte using the following code:</p>

<HighlightCompo code={modules['./md/theme-selector.md'] as string} class="max-w-5xl" />

<h2>Nav</h2>

<p>Create src/routes/utils/Nav.svelte using the following code:</p>

<HighlightCompo code={modules['./md/nav.md'] as string} class="max-w-5xl" />

<h2>+layout.svelte</h2>
<p>Finally use this nav in src/routes/+layout.svelte.</p>
