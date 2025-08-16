<script>
  import { page } from "$app/state";
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from "flowbite-svelte";
  let activeUrl = $derived(page.url.pathname);
</script>

<Navbar>
  <NavBrand href="/">
    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Svelte Rune Highlight</span>
  </NavBrand>
  <NavHamburger />
  <NavUl {activeUrl}>
    <NavLi href="/">Home</NavLi>
    <NavLi href="/docs/components/navbar">Navbar</NavLi>
    <NavLi href="/docs/components/accordion">Accordion</NavLi>
    <NavLi href="/docs/components/alert">Alert</NavLi>
    <NavLi href="/docs/components/avatar">Avatar</NavLi>
  </NavUl>
</Navbar>