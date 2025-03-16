<script lang="ts">
	import { Highlight, HighlightSvelte, HighlightAuto } from '$lib';
	import typescript from '$lib/languages/typescript';
	import HighlightCompo from '../utils/HighlightCompo.svelte';
	const modules = import.meta.glob('./md/*.{md,json}', {
		query: '?raw',
		import: 'default',
		eager: true
	});
	import '$lib/styles/github-dark.css';
</script>

<h1>Importing Markdown files for code blocks</h1>

<h2>Highlight</h2>
<Highlight code={modules['./md/setup.md'] as string} language={typescript} />

<h2>HighlightSvelte</h2>
<HighlightSvelte code={modules['./md/default-sidebar.md'] as string} />

<h2>HighlightAuto</h2>
<HighlightAuto code={modules['./md/outline-with-icon.json'] as string} />

<h2>HighlightCompo</h2>
<HighlightCompo code={modules['./md/adding-active-class.md'] as string} />

<h2>Multi-level dropdown</h2>
<HighlightCompo code={modules['./md/multi-level-dropdown.md'] as string} />

<h2>Content Separator</h2>
<HighlightCompo code={modules['./md/content-separator.md'] as string} />
