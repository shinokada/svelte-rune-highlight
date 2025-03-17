<script lang="ts">
	import { Navbar, NavLi, NavBrand, NavUl, uiHelpers, Darkmode } from 'svelte-5-ui-lib';
	import { CodeThemeSelector } from '$lib';
	import { Bluesky } from 'runes-webkit';
	import GitHub from './GitHub.svelte';
	import { page } from '$app/state';

	let activeUrl = $state(page.url.pathname);
	$effect(() => {
		activeUrl = page.url.pathname;
	});

	let nav = uiHelpers();

	let navStatus = $state(false);
	let toggleNav = nav.toggle;
	let closeNav = nav.close;
	let divClass = 'ml-auto w-full';
	let ulclass =
		'flex flex-col py-3 lg:flex-row lg:my-0 order-1 font-medium dark:lg:bg-transparent lg:bg-white lg:border-0 lg:space-x-2 xl:space-x-4';
	let navClass =
		'w-full divide-gray-200 border-gray-200 bg-white text-gray-500 dark:divide-gray-700 dark:border-gray-700 dark:transparent dark:text-gray-400 sm:px-4';

	$effect(() => {
		navStatus = nav.isOpen;
	});
</script>

<header
	class="sticky top-0 z-40 mx-auto w-full flex-none border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-900"
>
	<Navbar {navClass} {toggleNav} {closeNav} {navStatus} breakPoint="lg" fluid div2Class={divClass}>
		{#snippet brand()}
			<NavBrand siteName="Svelte Rune Highlight" spanClass="sm:text-2xl" />
			<div class="ml-auto flex items-center lg:order-1">
				<a
					class="hidden rounded-lg p-2.5 whitespace-normal hover:bg-gray-100 hover:text-gray-900 focus:ring-0 focus:ring-gray-400 focus:outline-none sm:inline-block dark:hover:bg-gray-600 dark:hover:text-white"
					href="https://bsky.app/profile/codewithshin.com"
				>
					<Bluesky />
				</a>
				<a
					class="hidden rounded-lg p-2.5 whitespace-normal hover:bg-gray-100 hover:text-gray-900 focus:ring-0 focus:ring-gray-400 focus:outline-none sm:inline-block dark:hover:bg-gray-600 dark:hover:text-white"
					href="https://github.com/shinokada/svelte-rune-highlight"
				>
					<GitHub />
				</a>
				<Darkmode class="mr-4 inline-block hover:text-gray-900 dark:hover:text-white" />
				<CodeThemeSelector localStorageName="SVELTE_RUNE_HIGHLIGHT"/>
			</div>
		{/snippet}
		<NavUl {activeUrl} class={ulclass}>
			<NavLi href="/">Home</NavLi>
			<NavLi href="/highlight">Highlight</NavLi>
			<NavLi href="/auto">Auto</NavLi>
			<NavLi href="/svelte">Svelte</NavLi>
			<NavLi href="/line-numbers">Line Numbers</NavLi>
			<NavLi href="/code-theme">Code Theme</NavLi>
			<NavLi href="/extend">Extend</NavLi>
		</NavUl>
	</Navbar>
</header>
