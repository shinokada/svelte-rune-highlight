<script lang="ts">
  import { Banner } from 'flowbite-svelte';
  import { HighlightCompo } from '$lib';
  import types from '$lib/types?raw';
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  /*eslint no-undef: "off"*/
  const version = __VERSION__;
  const svelteVersion = __SVELTE_VERSION__;
  const svelteKitVersion = __SVELTEKIT_VERSION__;
  const viteVersion = __VITE_VERSION__;
  const highlightjsVersion = __HIGHLIGHTJSVERSION__;
</script>

<Banner id="default-banner" dismissable={false} class="relative z-10 mt-6 p-2">
  <p class="flex items-center gap-4 text-lg font-normal text-gray-900 dark:text-gray-100">
    To Keep It Going, Please Show Your Love.
    <a href="https://ko-fi.com/Z8Z2CHALG" target="_blank">
      <img height="42" style="border:0px;height:42px;" src="https://storage.ko-fi.com/cdn/kofi3.png?v=3" alt="Buy Me a Coffee at ko-fi.com" />
    </a>
  </p>
</Banner>

<h1>Svelte Rune Highlight</h1>

<p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Version: {version}</p>

<p>
  Syntax highlighting for Svelte 5 Runes using <a class="dark:text-primary-500 hover:underline" href="https://github.com/highlightjs/highlight.js"> highlight.js </a>
  .
</p>

<h2>Installation</h2>

<HighlightCompo code={modules['./md/installation.md'] as string} />

<h2>Requirements</h2>

<p>This library requires:</p>
<ul class="my-4 ml-4 list-inside list-disc space-y-1">
  <li>Svelte 5 (uses Runes)</li>
  <li>SvelteKit (optional, but recommended)</li>
  <li>highlight.js</li>
</ul>

<h2>Basic Usage</h2>

<HighlightCompo
  lang="ts"
  code={`import { Highlight } from 'svelte-rune-highlight';
import javascript from 'highlight.js/lib/languages/javascript';

const jsLang = {
  name: 'javascript',
  register: javascript
};

const code = \`console.log('Hello, world!');\`;

<Highlight language={jsLang} {code} />`}
/>

<h2>Types</h2>

<HighlightCompo lang="ts" code={types} />

<h2>Credit</h2>
<p>
  <a class="dark:text-primary-500 hover:underline" href="https://www.npmjs.com/package/svelte-highlight"> Svelte-Highlight </a>
</p>

<h2>Technical Details of this website</h2>
<ul>
  <li>Svelte: {svelteVersion}</li>
  <li>SvelteKit: {svelteKitVersion}</li>
  <li>Vite: {viteVersion}</li>
  <li>highlight.js: {highlightjsVersion}</li>
</ul>
