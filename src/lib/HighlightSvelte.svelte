<script lang="ts">
	// @ts-check
	import LangTag from './LangTag.svelte';
	import hljs from 'highlight.js/lib/core';
	import xml from 'highlight.js/lib/languages/xml';
	import javascript from 'highlight.js/lib/languages/javascript';
	import css from 'highlight.js/lib/languages/css';
	import { createEventDispatcher } from 'svelte';

	interface Props {
		children?: any;
		code?: string;
		langtag?: boolean;
	}

	let { children, code = '', langtag = false, ...restProps } = $props<Props>();

	const dispatch = createEventDispatcher();

	hljs.registerLanguage('xml', xml);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('css', css);

	let highlighted = $state(hljs.highlightAuto(code).value);

	$effect(() => {
		if (highlighted) dispatch('highlight', { highlighted });
	});
</script>

<LangTag {...restProps} languageName="svelte" {langtag} {highlighted} {code} />

<!--
@component
[Go to docs](https://svelte-rune-highlight.vercel.app/)
## Props
@props: children?: any;
@props:code?: string;
@props:langtag?: boolean;
-->
