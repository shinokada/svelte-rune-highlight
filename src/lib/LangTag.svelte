<script lang="ts">
	interface Props {
		code?: string;
		highlighted?: string;
		languageName?: string;
		langtag?: boolean;
		preClass?: string;
	}

	let {
		code,
		highlighted,
		languageName = 'plaintext',
		langtag = false,
		preClass,
		...restProps
	}: Props = $props();
</script>

<!-- eslint-disable svelte/no-at-html-tags -->
<pre class="{preClass} {langtag ? 'langtag' : ''}" data-language={languageName} {...restProps}><code
		class:hljs={true}
		>{#if highlighted}{@html highlighted}{:else}{code}{/if}</code
	></pre>

<style>
	.langtag {
		position: relative;
	}

	.langtag::after {
		content: attr(data-language);
		position: absolute;
		top: var(--langtag-top, 0);
		right: var(--langtag-right, 0);
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--langtag-background, inherit);
		color: var(--langtag-color, inherit);
		border-radius: var(--langtag-border-radius, 0);
		padding: var(--langtag-padding, 1em);
	}
</style>

<!--
@component
[Go to docs](https://svelte-rune-highlight.codewithshin.com/)
## Props
@prop code
@prop highlighted
@prop languageName = 'plaintext'
@prop langtag = false
@prop preClass
@prop ...restProps
-->
