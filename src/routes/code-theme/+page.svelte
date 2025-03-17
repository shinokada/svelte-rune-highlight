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

<h1>Code Theme</h1>

<Highlight code={modules['./md/setup.md'] as string} language={typescript} />
