<script lang="ts">
	import { browser } from '$app/environment';
	import styles from './styles/themes.json';

	let { localStorageName = 'CODE_BLOCK_STYLE'} = $props();
	/*eslint no-undef: "off"*/
	// const localStorageName = __NAME__.replace(/[\s-]/g, '_').toUpperCase() + '_CODE_BLOCK_STYLE';

	let selected = $state(browser && (localStorage.getItem(localStorageName) ?? 'material-darker'));
	
	$effect(() => {
		let link: HTMLLinkElement;
		(async () => {
			const css = await import(`./styles/${selected}.css?url`);
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

<select
	class="w-32 border border-gray-200 p-1 text-gray-800 md:w-36 dark:bg-white dark:text-gray-800"
	bind:value={selected}
>
	{#each styles as theme}
		<option value={theme}>{theme}</option>
	{/each}
</select>
