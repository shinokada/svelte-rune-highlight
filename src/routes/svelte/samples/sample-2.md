<script>
	import { Navbar, NavLi, NavBrand, NavUl, uiHelpers } from 'svelte-5-ui-lib';
	let nav = uiHelpers();

	let navStatus = $state(false);
	let toggleNav = nav.toggle;
	let closeNav = nav.close;

	$effect(() => {
		// this can be done adding nav.navStatus directly to DOM element
		// without using effect
		navStatus = nav.isOpen;
	});
</script>


<Navbar {toggleNav} {closeNav} {navStatus} breakPoint="md">
	{#snippet brand()}
		<NavBrand siteName="Svelte 5">
			<img width="30" src="/images/svelte-icon.png" alt="svelte icon" />
		</NavBrand>
	{/snippet}

	<NavUl>
		<NavLi href="/">Home</NavLi>
		<NavLi href="/components/navbar">Navbar</NavLi>
		<NavLi href="/components/footer">Footer</NavLi>
	</NavUl>
</Navbar>