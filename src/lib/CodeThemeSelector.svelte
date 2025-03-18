<script lang="ts">
	import { browser } from '$app/environment';
	import styles from './styles/themes.json';

	interface Props {
		localStorageName?: string;
		class?: string;
	}
	let {
		localStorageName = 'CODE_BLOCK_STYLE',
		class:
			className = 'w-32 border border-gray-200 p-1 text-gray-800 md:w-36 bg-white dark:bg-white dark:text-gray-800'
	}: Props = $props();

	let selected = $state(browser && (localStorage.getItem(localStorageName) ?? 'material-darker'));

	$effect(() => {
		let link: HTMLLinkElement;
		(async () => {
			const css = await import(`./styles/${selected}.css`);
			link = document.createElement('link');

			link.rel = 'stylesheet';
			link.href = css.default;
			document.head.append(link);
		})();
		if (browser && selected) {
			// set selected style to localStorage
			localStorage.setItem(localStorageName, selected);
		}
		return () => {
			// clean up
			link.remove();
		};
	});
</script>

<select class={className} bind:value={selected}>
	{#each styles as theme}
		<option value={theme}>{theme}</option>
	{/each}
</select>

<!--
@component
[Go to docs](https://svelte-rune-highlight.codewithshin.com/)
## Props
@prop localStorageName = 'CODE_BLOCK_STYLE'
@prop class:
			className = 'w-32 border border-gray-200 p-1 text-gray-800 md:w-36 bg-white dark:bg-white dark:text-gray-800'
-->
