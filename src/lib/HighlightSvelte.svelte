<script lang="ts">
	import LangTag from './LangTag.svelte';
	import hljs from 'highlight.js/lib/core';
	import xml from 'highlight.js/lib/languages/xml';
	import javascript from 'highlight.js/lib/languages/javascript';
	import css from 'highlight.js/lib/languages/css';

	interface Props {
		code?: string;
		langtag?: boolean;
		preClass?: string;
	}

	let { code = '', langtag = false, preClass, ...restProps }: Props = $props();

	hljs.registerLanguage('xml', xml);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('css', css);

	let highlighted = $derived(hljs.highlightAuto(code).value);
</script>

<LangTag {preClass} {...restProps} languageName="svelte" {langtag} {highlighted} {code} />

<!--
@component
[Go to docs](https://svelte-rune-highlight.codewithshin.com/)
## Props
@prop code = ''
@prop langtag = false
@prop preClass
@prop ...restProps
-->
