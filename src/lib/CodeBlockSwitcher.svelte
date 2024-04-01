<script lang="ts">
  // work in progress. This works locally but not as a component
  // users must have their own styles locally to import
  import { browser } from '$app/environment';

  interface Props {
    // stylesImport?: any;
    class?: string;
  }
  let {  class: className }: Props = $props();
  // const stylesImport = import.meta.glob('./styles/*.css');
  import { cssNames } from '$lib'
 
  // @ts-ignore
  let selected: string = $state(
    browser && (localStorage.getItem('CODE_BLOCK_STYLE') ?? 'gigavolt')
  );
  
  // const styles = Object.entries(allStyles).map(([path, importFn]) => ({
  //   value: path.slice(path.lastIndexOf('/') + 1, -4),
  //   name: path.slice(path.lastIndexOf('/') + 1, -4)
  // }));

  $effect(() => {
    // console.log('stylesImport[selected]', stylesImport[`./styles/${selected}.css`])
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
      // link.remove();
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
@props: stylesImport: any;
@props:class?: string;
-->
