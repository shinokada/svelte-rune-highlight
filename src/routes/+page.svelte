<script lang="ts">
  import HighlightCompo from './utils/HighlightCompo.svelte';
  const modules = import.meta.glob('./md/*.md', { query: '?raw', import: 'default', eager: true });
  import { removeHyphensAndCapitalize } from './utils/helpers';
  const name = __NAME__;
  const version = __VERSION__;
  const githuburl = __GITHUBURL__;
  const svelteVersion = __SVELTEVERSION__;
  const svelteKitVersion = __SVELTEKITVERSION__;
  const viteVersion = __VITEVERSION__;
  const highlightjsVersion = __HIGHLIGHTJSVERSION__;
</script>

<h1><a class='hover:underline' href={githuburl}>{removeHyphensAndCapitalize(name)}: v{version}</h1>

Syntax highlighting for Svelte using <a href="https://github.com/highlightjs/highlight.js">highlight.js</a>.
This lib is ported from <a href="https://www.npmjs.com/package/svelte-highlight">Svelte-Highlight</a>.

<h2>Installation</h2>

<HighlightCompo code={modules['./md/installation.md'] as string} />

<h2>Usage</h2>

You may want to create a wrapper:

<HighlightCompo code={modules['./md/wrapper.md'] as string} />

Create a md directory and add some markdown files. Then in your svelte file:

<HighlightCompo code={modules['./md/usage.md'] as string} />

Read more usage at <a href="https://www.npmjs.com/package/svelte-highlight">Svelte-Highlight</a>.

<h2>Technical Details</h2>
<ul>
  <li>Svelte: {svelteVersion}</li>
  <li>SvelteKit: {svelteKitVersion}</li>
  <li>Vite: {viteVersion}</li>
  <li>highlight.js: {highlightjsVersion}</li>
</ul>