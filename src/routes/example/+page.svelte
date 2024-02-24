<script lang="ts">
	import HighlightCompo from '../utils/HighlightCompo.svelte';
	const modules = import.meta.glob('./md/*.md', { query: '?raw', import: 'default', eager: true });

	import { Select, Label } from 'svelte-5-ui-lib';

	const stylesImport = import.meta.glob('$lib/styles/*.css')
  let selected =$state('github-dark');
	const styles = Object.entries(stylesImport)
  .map(([path, importFn]) => ({
		value: path.replace('/src/lib/styles/', '').replace('.css', ''),
    name: path.slice(path.lastIndexOf('/') + 1, -4), 
  }));
	$effect(() => {
		import(`../../lib/styles/${selected}.css`);
	})
</script>

<div class='w-64'>
	<Label>
		You can select a theme
		<Select selectclass="mt-2" items={styles} bind:value={selected} />
	</Label>
</div>

<HighlightCompo code={modules['./md/setup.md'] as string} />

<HighlightCompo code={modules['./md/default-sidebar.md'] as string} />

<HighlightCompo code={modules['./md/using-object.md'] as string} />

<HighlightCompo code={modules['./md/adding-active-class.md'] as string} />

<HighlightCompo code={modules['./md/multi-level-dropdown.md'] as string} />

<HighlightCompo code={modules['./md/content-separator.md'] as string} />
