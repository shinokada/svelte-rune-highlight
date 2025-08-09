<script lang="ts">
  import {
    Navbar,
    NavLi,
    NavBrand,
    NavUl,
    uiHelpers,
    DarkMode,
    Dropdown,
    DropdownItem
  } from 'flowbite-svelte';
  import DynamicCodeBlockStyle from './DynamicCodeBlockStyle.svelte';
  import { Bluesky, DotsHorizontalOutline, GithubSolid, XSolid } from 'runes-webkit';
  import { page } from '$app/state';

  const githubUrl = `https://github.com/shinokada/${__NAME__}`;
  const twitterUrl = 'https://twitter.com/shinokada';
  const blueskyUrl = 'https://bsky.app/profile/codewithshin.com';

  let activeUrl = $state(page.url.pathname);
  $effect(() => {
    activeUrl = page.url.pathname;
  });

  let nav = uiHelpers();
  let navStatus = $state(false);

  $effect(() => {
    navStatus = nav.isOpen;
  });

  let activeClass = 'p-2 text-sm lg:text-base';
  let nonActiveClass = 'p-2 text-sm lg:text-base';
</script>

<Navbar
  breakpoint="lg"
  fluid
  class="fixed top-0 left-0 z-50 border-b border-gray-100 bg-white sm:px-12  lg:py-0 dark:border-gray-700 dark:bg-stone-950"
  navContainerClass="lg:justify-between"
>
  <NavBrand href="/">
    <span class="self-center text-2xl font-semibold whitespace-nowrap sm:text-3xl dark:text-white"
      >Svelte Rune Highlight</span
    >
  </NavBrand>
  <div class="flex md:order-2">
    <DynamicCodeBlockStyle />
    <DotsHorizontalOutline class="mt-1.5 mr-4 ml-6 dark:text-white" size="lg" />
    <Dropdown simple class="p-1">
      {#if blueskyUrl}
        <DropdownItem href={blueskyUrl} target="_blank" class="m-0 p-0.5">
          <Bluesky size="30" />
        </DropdownItem>
      {/if}
      {#if twitterUrl}
        <DropdownItem href={twitterUrl} target="_blank" class="m-0 p-2"><XSolid /></DropdownItem>
      {/if}
      {#if githubUrl}
        <DropdownItem href={githubUrl} target="_blank" class="m-0 p-2">
          <GithubSolid />
        </DropdownItem>
      {/if}
    </Dropdown>
    <DarkMode class="m-0 p-2" />
  </div>
  <NavUl
    {activeUrl}
    class="order-2 lg:order-1"
    classes={{ active: activeClass, nonActive: nonActiveClass }}
  >
    <NavLi href="/">Home</NavLi>
    <NavLi href="/highlight">Highlight</NavLi>
    <NavLi href="/auto">Auto</NavLi>
    <NavLi href="/svelte">Svelte</NavLi>
    <NavLi href="/line-numbers">Line Numbers</NavLi>
    <NavLi href="/wrapper">Wrapper</NavLi>
    <NavLi href="/theme-selector">Theme Selector</NavLi>
  </NavUl>
</Navbar>
