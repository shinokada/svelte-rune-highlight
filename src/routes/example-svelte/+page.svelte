<script lang="ts">
  import { Highlight, HighlightSvelte, HighlightAuto } from '$lib';
  import typescript from '$lib/languages/typescript';
  import HighlightCompo from '../utils/HighlightCompo.svelte';
  const modules = import.meta.glob('./codes/*.svelte', { query: '?raw', import: 'default', eager: true });

  import { Select, Label } from 'svelte-5-ui-lib';

  const stylesImport = import.meta.glob('$lib/styles/*.css');
  let selected = $state('github-dark');
  const styles = Object.entries(stylesImport).map(([path, importFn]) => ({
    value: path.replace('/src/lib/styles/', '').replace('.css', ''),
    name: path.slice(path.lastIndexOf('/') + 1, -4)
  }));
  $effect(() => {
    import(`../../lib/styles/${selected}.css`);
  });
</script>

<h1>Importing Svelte files for code blocks</h1>
<div class="w-64">
  <Label>
    You can select a theme
    <Select selectclass="mt-2" items={styles} bind:value={selected} />
  </Label>
</div>


<h2>HighlightCompo</h2>
<HighlightCompo code={modules['./codes/adding-active-class.svelte'] as string} theme={selected}/>

<h2>Multi-level dropdown</h2>
<HighlightCompo code={modules['./codes/multi-level-dropdown.svelte'] as string} theme={selected} />

<h2>Content Separator</h2>
<HighlightCompo code={modules['./codes/content-separator.svelte'] as string} theme={selected} />
