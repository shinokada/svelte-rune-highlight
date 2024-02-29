<script lang="ts">
  import { Label, Navbar, NavLi, NavBrand, NavUl, uiHelpers, Darkmode } from 'svelte-5-ui-lib';
  import GitHub from './GitHub.svelte';
  let nav = uiHelpers();

  let navStatus = $state(false);
  let toggleNav = nav.toggle;
  let closeNav = nav.close;
  let divClass = 'ml-auto w-full';
  let ulclass = 'flex flex-col py-3 lg:flex-row lg:my-0 order-1 font-medium dark:lg:bg-transparent lg:bg-white lg:border-0';
  let navclass = 'w-full divide-gray-200 border-gray-200 bg-white text-gray-500 dark:divide-gray-700 dark:border-gray-700 dark:transparent dark:text-gray-400 sm:px-4';

  const stylesImport = import.meta.glob('$lib/styles/*.css');
  let selected = $state('github-dark');
  const styles = Object.entries(stylesImport).map(([path, importFn]) => ({
    value: path.slice(path.lastIndexOf('/') + 1, -4),
    name: path.slice(path.lastIndexOf('/') + 1, -4)
  }));
  $effect(() => {
    navStatus = nav.isOpen;
    let link: HTMLLinkElement;
    (async () => {
      const css = await import(`../../lib/styles/${selected}.css?url`);
      link = document.createElement('link');

      link.rel = 'stylesheet';
      link.href = css.default;
      document.head.append(link);
    })();

    return () => {
      // clean up
      link.remove();
    };
  });
</script>

<header class="sticky top-0 z-40 mx-auto w-full flex-none border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-900">
  <Navbar {navclass} {toggleNav} {closeNav} {navStatus} breakPoint="lg" fluid div2class={divClass}>
    {#snippet brand()}
      <NavBrand siteName="Svelte Rune Highlight" />
      <div class="ml-auto flex items-center lg:order-1">
        <a class="hidden whitespace-normal rounded-lg p-2.5 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-0 focus:ring-gray-400 dark:hover:bg-gray-600 dark:hover:text-white sm:inline-block" href="https://github.com/shinokada/svelte-rune-highlight">
          <GitHub />
        </a>
        <Darkmode btnclass="inline-block dark:hover:text-white hover:text-gray-900" />
        <select class="w-32 border border-gray-200 p-1 text-gray-800 dark:text-gray-800 md:w-36" bind:value={selected}>
          {#each styles as theme}
            <option value={theme.value}>{theme.value}</option>
          {/each}
        </select>
      </div>
    {/snippet}
    <NavUl {ulclass}>
      <NavLi href="/">Home</NavLi>
      <NavLi href="/highlight">Highlight</NavLi>
      <NavLi href="/auto">Auto</NavLi>
      <NavLi href="/svelte">Svelte</NavLi>
      <NavLi href="/line-numbers">Line Numbers</NavLi>
    </NavUl>
  </Navbar>
</header>
