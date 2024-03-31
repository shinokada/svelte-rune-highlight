<script lang="ts">
  import { browser } from '$app/environment';
  import cssNames from './cssNames.json'
  interface Props {
 
    class?: string;
  }
  let {  class: className }: Props = $props();
  // @ts-ignore
  let selected: string = $state(
    browser && (localStorage.getItem('CODE_BLOCK_STYLE') ?? 'gigavolt')
  );
  
  $effect(() => {
    let link: HTMLLinkElement;
    (async () => {
      const css = await import(`./styles/${selected}.css?url`);
      link = document.createElement('link');

      link.rel = 'stylesheet';
      link.href = css.default;
      document.head.append(link);
    })();
    if (browser) {
      // get selected style from localStorage
      localStorage.setItem('CODE_BLOCK_STYLE', selected);
    }
    return () => {
      // clean up
      link.remove();
    };
  });
</script>

<select class={className} bind:value={selected}>
  {#each cssNames as theme}
    <option value={theme}>{theme}</option>
  {/each}
</select>

<!--
@component
[Go to docs](https://svelte-rune-highlight.codewithshin.com/)
## Props
@props: class?: string;
-->
