<script lang="ts">
	import LangTag from '$lib/LangTag.svelte';
	import hljs from 'highlight.js/lib/core';
	import xml from 'highlight.js/lib/languages/xml';
	import javascript from 'highlight.js/lib/languages/javascript';
	import css from 'highlight.js/lib/languages/css';

	interface Props {
		code?: string;
		langtag?: boolean;
		preClass?: string;
	}

	let { code, langtag = false, preClass, ...restProps }: Props = $props();
	hljs.registerLanguage('xml', xml);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('css', css);
</script>

<div class="bg-red-500 p-4">
	<LangTag {preClass} {...restProps} languageName="svelte" {langtag} {code} />
</div>
