<script lang="ts">
	import { HighlightSvelte, Highlight } from '$lib';
	// check colorscheme at https://highlightjs.org/demo
	import markdown from '$lib/languages/markdown';
	let { code, codeLang } = $props<{ code: string; codeLang?: string }>();
</script>

<div
	class="mx-auto my-8 max-w-4xl rounded-md border border-gray-200 bg-gray-50 p-0.5 dark:border-gray-600 dark:bg-gray-700"
>
	{#if codeLang === 'md'}
		<Highlight language={markdown} {code} />
	{:else if code}
		<HighlightSvelte {code} />
	{:else}
		no code is provided
	{/if}
</div>
