<script lang="ts">
	import LangTag from './LangTag.svelte';
	import hljs from 'highlight.js';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLPreElement> {
		code?: string;
		langtag?: boolean;
		class?: string;
	}
	
	let { code = '', langtag = false, class: className, ...restProps }: Props = $props();
	
	// Use $derived for reactive highlighting - more efficient than $state + $effect
	let highlightResult = $derived.by(() => {
		if (!code.trim()) {
			return { value: '', language: 'plaintext' };
		}
		
		try {
			return hljs.highlightAuto(code);
		} catch (error) {
			console.warn('Highlight.js auto-detection failed:', error);
			return { value: code, language: 'plaintext' };
		}
	});
	
	let highlighted = $derived(highlightResult.value);
	let language = $derived(highlightResult.language || 'plaintext');
</script>

<LangTag 
	class={className} 
	{...restProps} 
	languageName={language} 
	{langtag} 
	{highlighted} 
	{code} 
/>