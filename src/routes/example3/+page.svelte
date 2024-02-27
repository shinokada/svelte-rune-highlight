<script lang="ts">
  import { Highlight, HighlightSvelte, HighlightAuto } from '$lib';
  import typescript from '$lib/languages/typescript';
  import HighlightCompo2 from '../utils/HighlightCompo2.svelte';
  const modules = import.meta.glob('./md/*.md', { query: '?raw', import: 'default', eager: true });
  import { removeHyphensAndCapitalize } from '../utils/helpers';
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

  const code = 'const add = (a: number, b: number) => a + b;';
  const code2 = `<button on:click={() => { console.log(0); }}>Increment {count}</button>`;
  const code3 = `body {\n  padding: 0;\n  color: red;\n}`;

</script>

Selected: {selected}
<h1>
  Example 3
</h1>
<div class="w-64">
  <Label>
    You can select a theme
    <Select selectclass="mt-2" items={styles} bind:value={selected} />
  </Label>
</div>


<p>Install Svelte 5 and enable runes in svelte.config.js:</p>

<HighlightCompo2 code={modules['./md/setup.md'] as string} theme={selected}/>

<p>Install svelte-rune-highlight:</p>

<HighlightCompo2 code={modules['./md/default-sidebar.md'] as string} theme={selected}/>
