<script lang="ts">
  import { Navbar, NavLi, NavBrand, NavHamburger, NavUl, uiHelpers, DarkMode, Dropdown, DropdownItem } from 'flowbite-svelte';
  import ThemeSelector from './ThemeSelector.svelte';  
  import { page } from '$app/state';

  let activeUrl = $state(page.url.pathname);
  let nav = uiHelpers();
  let navStatus = $state(false);

  $effect(() => {
    activeUrl = page.url.pathname;
    navStatus = nav.isOpen;
  });

  let activeClass = 'p-2 text-base hover:text-gray-600';
  let nonActiveClass = 'p-2 text-base hover:text-gray-600';
</script>

<Navbar
  breakpoint="xl"
  fluid
  class="fixed top-0 left-0 z-50 border-b border-gray-100 bg-white py-4  sm:px-12 dark:border-gray-700 dark:bg-gray-900"
  navContainerClass="xl:justify-between"
>
  <NavBrand href="/">
    <span class="self-center text-2xl font-semibold whitespace-nowrap xl:text-3xl dark:text-white"
      >Svelte Rune Highlight</span
    >
  </NavBrand>
  <div class="flex justify-end xl:order-2">
    <NavHamburger class="order-3" />
    <ThemeSelector class="hidden xl:block" />
    <DarkMode class="m-0 p-2" />
  </div>
  <NavUl
    breakpoint="xl"
    {activeUrl}
    class="order-2 xl:order-1"
    classes={{ active: activeClass, nonActive: nonActiveClass, ul: 'p-0' }}
  >
    <NavLi href="/">Home</NavLi>
    <NavLi href="/about">About</NavLi>
  </NavUl>
</Navbar>
