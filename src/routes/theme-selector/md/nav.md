<script lang="ts">
	import { Navbar, NavLi, NavBrand, NavUl, uiHelpers, Darkmode } from 'svelte-5-ui-lib';
	import ThemeSelector from './ThemeSelector.svelte';
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
				<Darkmode class="mr-4 inline-block hover:text-gray-900 dark:hover:text-white" />
				<ThemeSelector />
			</div>
		{/snippet}
		<NavUl {activeUrl} class={ulclass}>
			<NavLi href="/">Home</NavLi>
			<NavLi href="/about">About</NavLi>
		</NavUl>
	</Navbar>
</header>
