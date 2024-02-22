<script lang="ts">
	// @ts-check

	import LangTag from './LangTag.svelte';
	interface Props {
		code?: any;
		langtag?: boolean;
	}
	let { code, langtag = false, ...restProps } = $props<Props>();

	import hljs from 'highlight.js';
	import { createEventDispatcher } from 'svelte';

	/**
	 * @typedef {{ highlighted: string; language: string; }} HighlightEventDetail
	 * @type {import("svelte").EventDispatcher<{ highlight: HighlightEventDetail}>}
	 */
	const dispatch = createEventDispatcher();

	let highlighted: string = $state('');
	let language: string = $state('');

	$effect(() => {
		if (highlighted) dispatch('highlight', { highlighted, language });
		({ value: highlighted, language = '' } = hljs.highlightAuto(code));
	});
</script>

<LangTag {...restProps} languageName={language} {langtag} {highlighted} {code} />

<!--
@component
[Go to docs](https://svelte-rune-highlight.vercel.app/)
## Props
@props: code?: any;
@props:langtag?: boolean;
-->
