<script lang="ts">
  import { Highlight, HighlightSvelte, HighlightAuto } from '$lib';
  import typescript from '$lib/languages/typescript';
  import HighlightCompo from './utils/HighlightCompo.svelte';
  const modules = import.meta.glob('./md/*.md', { query: '?raw', import: 'default', eager: true });
  import { removeHyphensAndCapitalize } from './utils/helpers';
  import { Select, Label } from 'svelte-5-ui-lib';

  const stylesImport = import.meta.glob('$lib/styles/*.css');
  let selected = $state('github-dark');
  const styles = Object.entries(stylesImport).map(([path, importFn]) => ({
    value: path.replace('/src/lib/styles/', '').replace('.css', ''),
    name: path.slice(path.lastIndexOf('/') + 1, -4)
  }));
  async function importStyles() {
    await import(`../lib/styles/${selected}.css`);
  }
  $effect(() => {
    importStyles().then(() => console.log('style imported'));
    // import(`../lib/styles/${selected}.css`);
  });
  const name = __NAME__;
  const version = __VERSION__;
  const githuburl = __GITHUBURL__;
  const svelteVersion = __SVELTEVERSION__;
  const svelteKitVersion = __SVELTEKITVERSION__;
  const viteVersion = __VITEVERSION__;
  const highlightjsVersion = __HIGHLIGHTJSVERSION__;

  const code = 'const add = (a: number, b: number) => a + b;';
  const code2 = `<button on:click={() => { console.log(0); }}>Increment {count}</button>`;
  const code3 = `body {\n  padding: 0;\n  color: red;\n}`;

  
</script>


<h1>
  <a class="hover:underline dark:text-primary-500" href={githuburl}>
    {removeHyphensAndCapitalize(name)}: v{version}
  </a>
</h1>

<p>
  Syntax highlighting for Svelte using <a class="hover:underline dark:text-primary-500" href="https://github.com/highlightjs/highlight.js">highlight.js</a>
  . This lib is ported from
  <a class="hover:underline dark:text-primary-500" href="https://www.npmjs.com/package/svelte-highlight">Svelte-Highlight</a>
  for Svelte 5 Runes.
</p>

<h2>Repo</h2>

<p>
  <a class="hover:underline dark:text-primary-500" href={githuburl}>
    {removeHyphensAndCapitalize(name)}: v{version}
  </a>
</p>

<h2>Installation</h2>

<p>Install Svelte 5 and enable runes in svelte.config.js:</p>

<HighlightCompo code={modules['./md/installation-svelte5.md'] as string} theme={selected} />

<p>Install svelte-rune-highlight:</p>

<HighlightCompo code={modules['./md/installation.md'] as string} theme={selected} />

<h2>Usage</h2>

<h3>Styling</h3>

<div class="w-64">
  <Label>
    You can select a theme
    <Select selectclass="mt-2" items={styles} bind:value={selected}  />
  </Label>
</div>

<h3>Highlight</h3>

<HighlightCompo code={modules['./md/highlight.md'] as string} theme={selected} />
<p>Above code will produce the following:</p>
<Highlight language={typescript} {code}/>

<h3>HighlightSvelte</h3>
<HighlightCompo code={modules['./md/highlight-svelte.md'] as string} theme={selected} />
<p>Above code will produce the following:</p>
<HighlightSvelte code={code2} />

<h3>HighlightAuto</h3>
<HighlightCompo code={modules['./md/highlight-auto.md'] as string} theme={selected} />
<p>Above code will produce the following:</p>
<HighlightAuto code={code3} />

<h3>Wrapper</h3>

<p>You may want to create a wrapper:</p>

<HighlightCompo code={modules['./md/wrapper.md'] as string} theme={selected} />

<p>Create a md directory and add some markdown files. Then in your svelte file:</p>

<HighlightCompo code={modules['./md/usage.md'] as string} theme={selected} />

<p>
  Read more usage at <a class="hover:underline dark:text-primary-500" href="https://www.npmjs.com/package/svelte-highlight">Svelte-Highlight</a>
  .
</p>

<h2>Technical Details of this website</h2>
<ul>
  <li>Svelte: {svelteVersion}</li>
  <li>SvelteKit: {svelteKitVersion}</li>
  <li>Vite: {viteVersion}</li>
  <li>highlight.js: {highlightjsVersion}</li>
</ul>
