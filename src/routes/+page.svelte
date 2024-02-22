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

<h1><a class='hover:underline dark:text-primary-500' href={githuburl}>{removeHyphensAndCapitalize(name)}: v{version}</a></h1>

<p>
  Syntax highlighting for Svelte using <a class='hover:underline dark:text-primary-500' href="https://github.com/highlightjs/highlight.js">highlight.js</a>.
This lib is ported from <a class='hover:underline dark:text-primary-500' href="https://www.npmjs.com/package/svelte-highlight">Svelte-Highlight</a>.
</p>

<h2>Repo</h2>

<p><a class='hover:underline dark:text-primary-500' href={githuburl}>{removeHyphensAndCapitalize(name)}: v{version}</a></p>

<h2>Installation</h2>

<p>Install Svelte 5 and enable runes in svelte.config.js:</p>

<HighlightCompo code={modules['./md/installation-svelte5.md'] as string} />

<p>Install svelte-rune-highlight:</p>

<HighlightCompo code={modules['./md/installation.md'] as string} />

<h2>Usage</h2>

<p>You may want to create a wrapper:</p>

<HighlightCompo code={modules['./md/wrapper.md'] as string} />

<p>Create a md directory and add some markdown files. Then in your svelte file:</p>

<HighlightCompo code={modules['./md/usage.md'] as string} />

<p>Read more usage at <a class='hover:underline dark:text-primary-500' href="https://www.npmjs.com/package/svelte-highlight">Svelte-Highlight</a>.</p>

<h2>Technical Details of this website</h2>
<ul>
  <li>Svelte: {svelteVersion}</li>
  <li>SvelteKit: {svelteKitVersion}</li>
  <li>Vite: {viteVersion}</li>
  <li>highlight.js: {highlightjsVersion}</li>
</ul>