<script lang="ts">
	import LangTag from './LangTag.svelte';
	import hljs from 'highlight.js';

	interface Props {
		code?: string;
		langtag?: boolean;
	}
	let { code = '', langtag = false, ...restProps }: Props = $props();
	let highlighted: string = $state('');
	let language: string = $state('');
	function updateHighlight() {
		const result = hljs.highlightAuto(code);
		highlighted = result.value;
		language = result.language || '';
	}
	$effect(() => {
		updateHighlight();
	});
</script>

<LangTag {...restProps} languageName={language} {langtag} {highlighted} {code} />

<!--
@component
[Go to docs](https://svelte-rune-highlight.codewithshin.com/)
## Props
@prop code = ''
@prop langtag = false
@prop ...restProps
-->
