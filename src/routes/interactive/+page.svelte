<script lang="ts">
	import { Highlight, HighlightSvelte, LangTag } from '$lib';
	import { Label, Radio, Spinner, type SpinnerProps } from 'svelte-5-ui-lib';
	import Codewrapper from './Codewrapper.svelte';
	import typescript from 'highlight.js/lib/languages/typescript';
	import 'highlight.js/styles/github-dark.css';
	const sizes = ['4', '5', '6', '8', '10', '12', '16'];
	let spinnerSize = $state('8');
	// code generator
	let generatedCode = $derived(
		(() => {
			let props = [];
			if (spinnerSize !== '8') props.push(` size="${spinnerSize}"`);
			return `<Spinner${props.join('')} />`;
		})()
	);
	const tsLang = {
		name: 'typescript',
		register: typescript
	};
</script>

<h2>HighlightSvelte</h2>
<HighlightSvelte code={`let banana = 🍌`} />

<Spinner size={spinnerSize as SpinnerProps['size']} />
<div class="mb-4 flex flex-wrap space-x-4">
	<Label class="mb-4 w-full font-bold">Size:</Label>
	{#each sizes as size}
		<Radio labelClass="w-24 my-1" name="spinnersize" bind:group={spinnerSize} value={size}>
			{size}
		</Radio>
	{/each}
</div>
{generatedCode}
Highlight
<Highlight code={generatedCode} language={tsLang} numberLine />
HighlightSvelte
<HighlightSvelte code={generatedCode} />
LangTag
<LangTag languageName="svelte" code={generatedCode} />
Codewrapper
<Codewrapper code={generatedCode} />
