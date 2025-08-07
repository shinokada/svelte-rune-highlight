<script lang="ts">
	import LangTag from './LangTag.svelte';
	import hljs from 'highlight.js/lib/core';
	import xml from 'highlight.js/lib/languages/xml';
	import javascript from 'highlight.js/lib/languages/javascript';
	import css from 'highlight.js/lib/languages/css';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLPreElement> {
		code?: string;
		langtag?: boolean;
		class?: string;
	}

	let { code = '', langtag = false, class: className, ...restProps }: Props = $props();

	// Register languages once - could be moved to a module-level function
	// or handled in a singleton pattern for better performance
	if (!hljs.getLanguage('xml')) {
		hljs.registerLanguage('xml', xml);
	}
	if (!hljs.getLanguage('javascript')) {
		hljs.registerLanguage('javascript', javascript);
	}
	if (!hljs.getLanguage('css')) {
		hljs.registerLanguage('css', css);
	}

	// Use $derived.by for better error handling and performance
	let highlighted = $derived.by(() => {
		if (!code.trim()) {
			return '';
		}

		try {
			// For Svelte files, try XML first (for template), then auto-detect
			// This gives better results than pure auto-detection
			const xmlResult = hljs.highlight(code, { language: 'xml', ignoreIllegals: true });

			// If XML highlighting seems poor (low relevance), try auto-detection
			if (xmlResult.relevance < 5) {
				const autoResult = hljs.highlightAuto(code, ['javascript', 'xml', 'css']);
				return autoResult.relevance > xmlResult.relevance ? autoResult.value : xmlResult.value;
			}

			return xmlResult.value;
		} catch (error) {
			console.warn('Highlight.js failed for Svelte code:', error);
			return code;
		}
	});
</script>

<LangTag class={className} {...restProps} languageName="svelte" {langtag} {highlighted} {code} />

<!--
@component
[Go to docs](https://svelte-rune-highlight.codewithshin.com/)
## Props
@prop code = ''
@prop langtag = false
@prop class: className
@prop ...restProps
-->
